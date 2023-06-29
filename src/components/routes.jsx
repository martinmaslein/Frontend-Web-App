import Home from 'src/pages/home';
import ElectricGuitars from 'src/pages/guitars/electric-guitars';
import AcousticGuitars from 'src/pages/guitars/acoustic-guitars';
import GuitarAccessories from 'src/pages/guitars/accessories';
import ElectricBasses from 'src/pages/basses/electric-basses';
import AcousticBasses from 'src/pages/basses/acoustic-basses';
import BassAccessories from 'src/pages/basses/accessories';
import GuitarAmps from 'src/pages/amps/guitar-amps';
import BassAmps from 'src/pages/amps/bass-amps';
import Effects from 'src/pages/amps/effects';
import AcousticDrums from 'src/pages/drums/acoustic-drums';
import ElectronicDrums from 'src/pages/drums/electronic-drums';
import DrumAccesories from 'src/pages/drums/accesories';
import DigitalPianos from 'src/pages/keyboards/digital-pianos';
import Organs from 'src/pages/keyboards/organs';
import Keyboards from 'src/pages/keyboards/keyboards';
import AudioInterfaces from 'src/pages/recording/audio-interfaces';
import Microphones from 'src/pages/recording/microphones';
import StudioMonitors from 'src/pages/recording/studio-monitors';
import ProductDetails from 'src/pages/product';
import Cart from 'src/pages/cart/cart';
import Register from 'src/pages/Register';
import Login from 'src/pages/Login';
import MyOrders from '../pages/myOrders';



const routes = [
  { path: '/', component: Home },
  
  { path: '/ElectricGuitars', component: ElectricGuitars },
  { path: '/AcousticGuitars', component: AcousticGuitars },
  { path: '/GuitarAccessories', component: GuitarAccessories },

  { path: '/ElectricBasses', component: ElectricBasses },
  { path: '/AcousticBasses', component: AcousticBasses },
  { path: '/BassAccessories', component: BassAccessories },

  { path: '/GuitarAmps', component: GuitarAmps },
  { path: '/BassAmps', component: BassAmps },
  { path: '/Effects', component: Effects },

  { path: '/AcousticDrums', component: AcousticDrums },
  { path: '/ElectronicDrums', component: ElectronicDrums },
  { path: '/DrumAccesories', component: DrumAccesories },

  { path: '/DigitalPianos', component: DigitalPianos },
  { path: '/Organs', component: Organs },
  { path: '/Keyboards', component: Keyboards },

  { path: '/AudioInterfaces', component: AudioInterfaces },
  { path: '/Microphones', component: Microphones },
  { path: '/StudioMonitors', component: StudioMonitors },

  { path: '/Product/:id/:name', component: ProductDetails },
  { path: '/cart', component: Cart },
  { path: '/Register', component: Register },
  { path: '/Login', component: Login},
  { path: '/myOrders', component: MyOrders}
];




export default routes;