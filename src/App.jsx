import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import routes from './components/routes';
import AuthContext from "./contexts/authContext";
import { useAuth } from "./hooks/useAuth";
import { useState, useContext } from "react";

function App() {
  const { userData } = useAuth();
  const [authData, setAuthData] = useState({ signedIn: userData.signedIn, user: userData.user });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <CookiesProvider>

          <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh' }}>
            <Navbar />

            <div style={{ flex: '1' }}>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} exact path={route.path} element={<route.component />} />
                ))}
              </Routes>
            </div>

            <Footer />
          </div>

      </CookiesProvider>
    </AuthContext.Provider>
  );
}

export default App;