import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import routes from './components/routes';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
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
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;