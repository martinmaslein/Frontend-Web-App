import { useState, useEffect } from 'react'
import { Popover } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import Logo from './navbarComps/logo';
import PopoverPanel from './navbarComps/PopoverPanel';
import SearchBar from './navbarComps/SearchBar';
import { useCookies } from 'react-cookie';



const navigation = {
  categories: [
    {
      id: 'shop',
      name: 'Shop',
      featured: [
        {
          name: 'Productos Nuevos',
          imageSrc: 'https://static.guitarcenter.com/static/gc/2023/tent-pole/memorial-day/desktop/gc-md-mg-memorial-day-hp-new-arrival02-05-17-23.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: '10% Off',
          imageSrc: 'https://static.guitarcenter.com/static/gc/2023/tent-pole/memorial-day/desktop/gc-md-mg-memorial-day-hp-used-05-17-23.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'guitarras',
          name: 'Guitarras',
          items: [
            { name: 'Guitarras Eléctricas', href: '/ElectricGuitars' },
            { name: 'Guitarras Acústicas', href: '/AcousticGuitars' },
            { name: 'Accesorios de Guitarras', href: '/GuitarAccessories' },
          ],
        },
        {
          id: 'bajos',
          name: 'Bajos',
          items: [
            { name: 'Bajos Eléctricos', href: '/ElectricBasses' },
            { name: 'Bajos Acústicos', href: '/AcousticBasses' },
            { name: 'Accesorios de Bajo', href: '/BassAccessories' },
          ],
        },
        {
          id: 'amplificadores',
          name: 'Amplificadores y Efectos',
          items: [
            { name: 'Amplificadores de Guitarra', href: '/GuitarAmps' },
            { name: 'Amplificadores de Bajo', href: '/BassAmps' },
            { name: 'Efectos', href: '/Effects' },
          ],
        },
        {
          id: 'baterias',
          name: 'Baterias',
          items: [
            { name: 'Baterías Acústicas', href: '/AcousticDrums' },
            { name: 'Baterías Electrónicas', href: '/ElectronicDrums' },
            { name: 'Accesorios de Baterías', href: '/DrumAccesories' },
          ],
        },
        {
          id: 'teclados',
          name: 'Teclados y MIDI',
          items: [
            { name: 'Pianos Digitales', href: '/DigitalPianos' },
            { name: 'Órganos', href: '/Organs' },
            { name: 'Teclados y Controladores MIDI', href: '/Keyboards' },
          ],
        },
        {
          id: 'grabacion',
          name: 'Grabación',
          items: [
            { name: 'Monitores de Estudio', href: '/StudioMonitors' },
            { name: 'Interfaces de Audio', href: '/AudioInterfaces' },
            { name: 'Micrófonos', href: '/Microphones' },
          ],
        },
      ],
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
    const response = await fetch(API_URL + '/products');

    const data = await response.json();
    const productsData = data.products.data;
    setProducts(productsData);

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [cookies, setCookie] = useCookies(['cart']);
  const cartItems = cookies.cart || [];

  function closeNavbar() {
    setOpen(false);
  }

  return (
    <div className="bg-white">

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-red-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Obtenga envío gratuito en pedidos superiores a $20.000
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Logo />
              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">

                      <div className="relative flex">
                        <Popover.Button
                          className={classNames(
                            open
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800',
                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                          )}
                          onClick={() => setOpen(true)}
                        >
                          {category.name}
                        </Popover.Button>
                      </div>

                      {open && <PopoverPanel category={category} closeNavbar={closeNavbar} />}

                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Iniciar Sesión
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Crear Cuenta
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <Link to="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://flagicons.lipis.dev/flags/4x3/ar.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">ARG</span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div>

                {/* Search */}
                <div>
                  <SearchBar />
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
