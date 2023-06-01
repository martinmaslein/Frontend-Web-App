import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import SearchComponent from './navbarComps/searchComponent';
import Logo from './navbarComps/logo';
import PopoverPanel from './navbarComps/PopoverPanel';



const navigation = {
  categories: [
    {
      id: 'shop',
      name: 'Shop',
      featured: [
        {
          name: 'Productos Nuevos',
          href: '/about',
          imageSrc: 'https://static.guitarcenter.com/static/gc/2023/tent-pole/memorial-day/desktop/gc-md-mg-memorial-day-hp-new-arrival02-05-17-23.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: '10% Off',
          href: '/contact',
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
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
    { name: 'Shop', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)


  const [showSearch, setShowSearch] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearch(true);
  };


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
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          {/* </Popover Panel> */}
                          <PopoverPanel category={category} />

                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Iniciar Sesión
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Crear Cuenta
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://flagicons.lipis.dev/flags/4x3/ar.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">ARG</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <SearchComponent />
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
