import { Fragment, useState, useEffect } from 'react'
import { Popover } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Tab, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Logo from './navbarComps/logo';
import PopoverPanel from './navbarComps/PopoverPanel';
import SearchBar from './navbarComps/SearchBar';
import { useCookies } from 'react-cookie';
import { Cookies } from 'react-cookie';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useAuth } from "../hooks/useAuth";
import { apiUrl } from "../utils/constantes";


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

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([]);
  

  const fetchProducts = async () => {
    const response = await fetch(apiUrl + 'products');
    const data = await response.json();
    const productsData = data.products.data;
    setProducts(productsData);

  };

  const cookie = new Cookies();
  const { userData, setLogout, setUserdata } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(userData);
  }, [userData])

  useEffect(() => {
    let token = cookie.get("auth_token");
    if (token !== undefined && token != null) {
      axios.get(apiUrl + 'user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setUserdata(response.data.user);
        setIsLoading(false);
      });
    }
  }, []);

  const renderLinks = () => {
    console.log("userData = ", userData)
    if (userData.user === null || userData.singedIn === false) {
      return (
        <ul className="list-none flex">
          <li className="nav-item">
            <Link className="nav-link text-white bg-red-600 rounded-md py-2 px-4 text-white mr-4" to="/login">Iniciar sesión</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-red-600 rounded-md py-2 px-4 text-white" to="/register">Registrarse</Link>
          </li>
        </ul>
      );
    }

    return (
      <div className="flex items-center">
        {userData.user && (
          <ul className="flex items-center">
            <li className="mr-4">
              <span className="text-gray-500">Hola,</span>{" "}
              <span className="font-bold">{userData.user.name}</span>
            </li>
          </ul>
        )}

        <ul className="flex items-center">
          <li>
            <button
              className="text-gray-800 px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    );

  }

  const handleLogout = () => {
    let token = cookie.get("auth_token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      redirect: 'follow'
    };

    fetch(apiUrl + 'logout', requestOptions)
      .then(() => {
        setLogout();
      }).catch(err => {
        console.log(err);
      });
  }

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
                className={`rounded-md bg-white p-2 text-gray-400 ${isMobile ? 'block' : 'lg:hidden'}`}
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Logo />

              {isMobile ? (
                <div className="ml-auto flex items-center">

                  <div>
                    <SearchBar />
                  </div>
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

                  <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                      <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                          as={Fragment}
                          enter="transition ease-in-out duration-300 transform"
                          enterFrom="-translate-x-full"
                          enterTo="translate-x-0"
                          leave="transition ease-in-out duration-300 transform"
                          leaveFrom="translate-x-0"
                          leaveTo="-translate-x-full"
                        >
                          <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                            <div className="flex px-4 pb-2 pt-5">
                              <button
                                type="button"
                                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>


                            <Tab.Group as="div" className="mt-2">
                              <div className="border-b border-gray-200">
                                <Tab.List className="-mb-px flex flex-col px-4">
                                  <Link to="/" className="flex items-center justify-center whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium">
                                    Inicio
                                  </Link>
                                  {navigation.categories.map((category) => (
                                    <Tab
                                      key={category.name}
                                      className={({ selected }) =>
                                        classNames(
                                          selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                          'whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                        )
                                      }
                                    >
                                      {category.name}
                                    </Tab>
                                  ))}
                                </Tab.List>

                              </div>
                              <Tab.Panels as={Fragment}>
                                {navigation.categories.map((category) => (
                                  <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                    <div className="grid grid-cols-2 gap-x-4">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                          className="mt-6 flex flex-col space-y-6"
                                        >
                                          {section.items.map((item) => (
                                            <li key={item.name} className="flow-root">
                                              <Link to={item.href} className="-m-2 block p-2 text-gray-500">
                                                {item.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </Tab.Panel>
                                ))}
                              </Tab.Panels>
                            </Tab.Group>

                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                              <div className="flow-root">
                                <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                                  Iniciar Sesión
                                </Link>
                              </div>
                              <div className="flow-root">
                                <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                                  Crear Cuenta
                                </Link>
                              </div>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-6">
                              <Link to="#" className="-m-2 flex items-center p-2">
                                <img
                                  src="https://flagicons.lipis.dev/flags/4x3/ar.svg"
                                  alt=""
                                  className="block h-auto w-5 flex-shrink-0"
                                />
                                <span className="ml-3 block text-base font-medium text-gray-900">ARG</span>
                              </Link>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </Dialog>

                  </Transition.Root>
                </div>
              ) : (
                <>
                  {/* Flyout menus */}
                  <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div className="flex h-full space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {/* {({ open }) => (
                      <> */}
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
                          {/* </>
                    )} */}
                        </Popover>
                      ))}
                    </div>
                  </Popover.Group>

                  <div className="ml-auto flex items-center">

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

                    <div>{renderLinks()}</div>

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
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}