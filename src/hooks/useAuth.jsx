import React, { createContext, useContext, useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from "../utils/constantes";

const AuthContext = createContext({
    user: null,
    setUser: () => { },
    token: null,
    setToken: () => { },
    handleLogout: () => { }
});

export const AuthProvider = ({ children }) => {
    const [userData, setUserdata] = React.useState({ signedIn: false, user: null });
    const navigate = useNavigate();

    useEffect(() => {
        setUserdata(userData);
    }, [userData]);

    function getAuthCookieExpiration() {
        let date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));  // 7 days
        return date;
    }

    function setAsLogged(user) {
        const cookie = new Cookies();

        cookie.set('is_auth', true, { path: '/', expires: getAuthCookieExpiration(), sameSite: 'lax', httpOnly: false });
        cookie.set('auth_token', user, { path: '/', sameSite: 'lax' });

        axios.get(apiUrl + 'user', {
            headers: {
                Authorization: `Bearer ${user}`
            }
        }).then(response => {
            setUserdata({ signedIn: true, user: response.data.user});
        });

        navigate('/');
    }

    function setLogout() {
        const cookie = new Cookies();

        cookie.remove('is_auth', { path: '/', expires: getAuthCookieExpiration(), sameSite: 'lax', httpOnly: false });
        cookie.remove('auth_token', { path: '/', expires: getAuthCookieExpiration(), sameSite: 'lax', httpOnly: false });

        setUserdata({ signedIn: false, user: null });
        navigate('/login');
    }

    function loginUserOnStartup() {
        const cookie = new Cookies();
        if (cookie.get('is_auth')) {

            axios.get(apiUrl + 'user').then(response => {
                setUserdata({ signedIn: true, user: response.data.user });
                navigate('/');
            }).catch(error => {
                setUserdata({ signedIn: false, user: null });
                setLogout();
            });

        } else {
            setUserdata({ signedIn: false, user: null });
            navigate('/login');
        }
    }

    return (
        <AuthContext.Provider
            value={{
                userData,
                setUserdata,
                setAsLogged,
                setLogout,
                loginUserOnStartup
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);