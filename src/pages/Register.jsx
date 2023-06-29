import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "../hooks/useForm";
import axios from 'axios';

export default function Register() {
  const [nameError] = useState('');
  const [emailError] = useState('');
  const [passwordError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setErrors, navigate } = useForm();

  const makeRequest = (e) => {
    
    e.preventDefault();
    setErrors(null);
    
    axios.post('http://127.0.0.1:8000/rest/register', {
      name,
      email,
      password,
    }).then(response => {
      if (response.data.token) {
        alert("Register success");
        navigate('/login');
      }
    }).catch(error => {
      console.log(error);
      if (error.response) {
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="mt-4 text-center mb-4">Crear cuenta</h1>
        <form onSubmit={makeRequest}>
          <div className="mb-3">
            <label htmlFor="name" className="block">
              Nombre:
            </label>
            <div className="mt-2">
              <input
                onChange={e => setName(e.target.value)}
                name="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Nombre Completo"
                required
              />
              {nameError && <p className="text-danger">{nameError}</p>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block">
              Tu email:
            </label>
            <div className="mt-2">
              <input
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="name@company.com"
                required
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block">
              Contraseña:
            </label>
            <div className="mt-2">
              <input
                onChange={e => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Crear cuenta
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <p>
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="text-blue-500">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}