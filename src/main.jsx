import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initMercadoPago } from '@mercadopago/sdk-react'

const PUBLIC_KEY = import.meta.env.VITE_REAT_APP_PUBLIC_KEY;
initMercadoPago(PUBLIC_KEY);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
