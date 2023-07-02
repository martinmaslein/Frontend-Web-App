import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initMercadoPago } from '@mercadopago/sdk-react'
import { BrowserRouter} from 'react-router-dom';

const PUBLIC_KEY = import.meta.env.VITE_REAT_APP_PUBLIC_KEY;
initMercadoPago(PUBLIC_KEY, {
  locale: "es-AR",
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
