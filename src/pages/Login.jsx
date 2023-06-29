import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useForm } from "../hooks/useForm";
import axios from 'axios';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAsLogged } = useAuth();
  const { setErrors, setMessage } = useForm();

  const makeRequest = (e) => {
    e.preventDefault();
    setErrors(null);
    setMessage('');
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(() => {
      const payload = {
        email,
        password
      };

      axios.post('http://127.0.0.1:8000/rest/login', payload, { headers: { 'Accept': 'application/json' } }).then(response => {
        if (response.data.token) {
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
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia sesión</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={makeRequest}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => setEmail(e.target.value)}
                placeholder="nombre@company.com"
                maxLength={30}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-red-600 hover:text-indigo-500">Olvidaste tu contraseña?</a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          No estas registrado?
          <a href="#" className="font-semibold leading-6 text-red-500 hover:text-indigo-500"> Crea una cuenta</a>
        </p>
      </div>
    </div>
  );
}