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
import BassAccessories from './pages/basses/accessories';
import GuitarAmps from './pages/amps/guitar-amps';
import BassAmps from './pages/amps/bass-amps';
import Effects from './pages/amps/effects';
import AcousticDrums from './pages/drums/acoustic-drums';
import ElectronicDrums from './pages/drums/electronic-drums';
import DrumAccesories from './pages/drums/accesories';
import DigitalPianos from './pages/keyboards/digital-pianos';
import Organs from './pages/keyboards/organs';
import Keyboards from './pages/keyboards/keyboards';
import AudioInterfaces from './pages/recording/audio-interfaces';
import Microphones from './pages/recording/microphones';
import StudioMonitors from './pages/recording/studio-monitors';

  
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
                 <Route exact path='/BassAccessories' element={< BassAccessories />}></Route>

                 <Route exact path='/GuitarAmps' element={< GuitarAmps />}></Route>
                 <Route exact path='/BassAmps' element={< BassAmps />}></Route>
                 <Route exact path='/Effects' element={< Effects />}></Route>

                 <Route exact path='/AcousticDrums' element={< AcousticDrums />}></Route>
                 <Route exact path='/ElectronicDrums' element={< ElectronicDrums />}></Route>
                 <Route exact path='/DrumAccesories' element={< DrumAccesories />}></Route>

                 <Route exact path='/DigitalPianos' element={< DigitalPianos />}></Route>
                 <Route exact path='/Organs' element={< Organs />}></Route>
                 <Route exact path='/Keyboards' element={< Keyboards />}></Route>

                 <Route exact path='/AudioInterfaces' element={< AudioInterfaces />}></Route>
                 <Route exact path='/Microphones' element={< Microphones />}></Route>
                 <Route exact path='/StudioMonitors' element={< StudioMonitors />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;