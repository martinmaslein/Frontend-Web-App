import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import './index.css';
import Home from './pages/home';
import ElectricGuitars from './pages/guitars/electric-guitars';
import AcousticGuitars from './pages/guitars/acoustic-guitars';
import GuitarAccessories from './pages/guitars/accessories';
import ElectricBasses from './pages/basses/electric-basses';
import AcousticBasses from './pages/basses/acoustic-basses';
import BassAccesories from './pages/basses/accessories';
import GuitarAmps from './pages/amps/guitar-amps';
import BassAmps from './pages/amps/bass-amps';
import Effects from './pages/amps/effects';

  
class App extends Component {
  render() {
    return (
       <Router>
            <Navbar />
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>

                 <Route exact path='/ElectricGuitars' element={< ElectricGuitars />}></Route>
                 <Route exact path='/AcousticGuitars' element={< AcousticGuitars />}></Route>
                 <Route exact path='/GuitarAccessories' element={< GuitarAccessories />}></Route>

                 <Route exact path='/ElectricBasses' element={< ElectricBasses />}></Route>
                 <Route exact path='/AcousticBasses' element={< AcousticBasses />}></Route>
                 <Route exact path='/BassAccessories' element={< BassAccesories />}></Route>

                 <Route exact path='/GuitarAmps' element={< GuitarAmps />}></Route>
                 <Route exact path='/BassAmps' element={< BassAmps />}></Route>
                 <Route exact path='/Effects' element={< Effects />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;