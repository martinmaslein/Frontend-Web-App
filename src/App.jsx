import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import routes from './components/routes';
import AuthContext from "./contexts/authContext";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
import Login from './pages/login';
import { AuthProvider } from './hooks/useAuth';

function App() {

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;