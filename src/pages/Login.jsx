import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Alert, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getUser, login } from '../services/AuthService';
import { useForm } from "../hooks/useForm";
import axios from 'axios';

export default function Login() {
  const { setUser, setToken } = useAuth();
  const [error, setError] = useState(null);

  //const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const {setAsLogged} = useAuth();
  const { setErrors, renderFieldError, message, setMessage, navigate } = useForm();

  const makeRequest = (e) => {
    e.preventDefault();
    setErrors(null);
    setMessage('');
    // make request first to sanctum/csrf-cookie
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(() => {
      const payload = {
        email,
        password
      };

      if (remember) {
        payload.remember = true;
      }

      axios.post('http://127.0.0.1:8000/rest/login', payload, { headers: { 'Accept': 'application/json' } }).then(response => {

        if (response.data.token) {
          alert('Login success');
          console.log("dasfdasfasf",response.data.user);
          setAsLogged(response.data.token);
        }
      }).catch(error => {
        console.log(error);
        if (error.response) {
          if (error.response.data.message) {
            setMessage(error.response.data.message);
          }
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          }
        }
      });
    });
  };

  return (
    <section className="flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-md">
          <h1 className="mt-4 text-center">Iniciar Sesión</h1>
          {error && (
            <div className="container">
              <Alert variant="danger" className="p-2">
                <span>{error}</span>
              </Alert>
            </div>
          )}

          <form onSubmit={makeRequest} className="mx-auto">
            <div className="flex flex-col items-center">
              <div className="mt-4">
                <input
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="nombre@company.com"
                  required
                  className="w-full p-3 text-lg"
                  maxLength={30}
                />
              </div>

              <div className="mt-4">
                <input
                  onChange={e => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full p-3 text-lg"
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6 offset-md-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="remember"
                      id="remember" onChange={e => { setRemember(e.target.checked ? 1 : 0) }} />
                    <label className="form-check-label" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </form>



          <p className="mt-4 text-sm text-center">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="text-blue-600">
              Crear cuenta
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}