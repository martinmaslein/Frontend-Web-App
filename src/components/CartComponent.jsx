import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import ProductCart from './ProductCart';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import BrickComponent from './BrickComponent';
import Modal from 'react-modal';

export default function CartComponent() {


    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [cookies, setCookie] = useCookies(['cart']);
    const cartItems = cookies.cart || [];
    const navigate = useNavigate();
    const [totalCost, setTotalCost] = useState(0);
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Modal MP
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    };

    const isDisabled = !(address.trim().length > 0 && name.trim().length > 0 && validateEmail(email));

    function reversePage() {
        navigate(-1);
    }

    function newTotalCost() {
        let cost = 0;
        cartItems.map((item) => {
            cost += item.quantity * item.price;
        });
        setTotalCost(cost);
    }

    useEffect(() => {
        newTotalCost();
    }, [cartItems]);

    const createOrder = async () => {

        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const name = document.getElementById("name").value;
        const orderData = { delivery_address: address, email: email, name: name, details: [] };

        cartItems.map((item, index) => {
            orderData.details[index] = { quantity: item.quantity, product_id: item.id };
        });

        sendOrder(orderData);
    };

    const sendOrder = async (orderData) => {
        try {
            const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
            const response = await fetch(API_URL + '/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                console.log('Orden creada correctamente');
                cartItems.splice(0, cartItems.length);
                setIsModalOpen(true);
                setCookie('cart', cartItems, { path: '/' });
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            {isMobile ? (

                <div className="mobile-styles">
                    <div className="bg-gray-100">
                        <div className="container mx-auto mt-10">
                            {isModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                                    <div className="bg-white rounded-lg p-6 text-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1024 1024"
                                            className="h-16 w-16 text-green-500 inline-block align-middle"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
                                            />
                                        </svg>
                                        <p className="mt-2">Pedido realizado con éxito!</p>
                                        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="mobile-styles">
                                <h1 className="font-semibold text-2xl">Mi carrito</h1>
                                <h2 className="font-semibold text-2xl">{cartItems.length} Productos</h2>
                                <div className="grid grid-cols-3 mt-10 mb-5">
                                    <h3 className="font-semibold text-gray-600 text-xs uppercase">Producto</h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">Cantidad</h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">Precio</h3>
                                </div>
                                <ul>
                                    {cartItems.map((item, index) => (
                                        <ProductCart key={index} product={item} />
                                    ))}
                                </ul>
                                <button onClick={() => reversePage()} className="flex font-semibold text-indigo-600 text-sm mt-10">
                                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                    </svg>
                                    Continuar comprando
                                </button>
                                <div id="summary" className="px-8 py-10">
                                    <h1 className="font-semibold text-2xl border-b pb-8">Resumen del pedido</h1>
                                    <div className="py-10">
                                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                            <span>Costo total</span>
                                            <span>${totalCost}</span>
                                        </div>
                                        <input
                                            type="text"
                                            id="address"
                                            placeholder="Ingrese domicilio"
                                            className="p-2 text-sm w-full mt-6"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Ingrese nombre y apellido"
                                            className="p-2 text-sm w-full mt-6"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Ingrese e-mail de pago"
                                            className="p-2 text-sm w-full mt-6"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="border-t mt-8">
                                        <button
                                            onClick={() => createOrder()}
                                            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                                            style={{ opacity: isDisabled ? 0.6 : 1, cursor: isDisabled ? 'not-allowed' : 'pointer' }}
                                            disabled={isDisabled}
                                        >
                                            Efectuar pago
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (

                <div className="desktop-styles">
                    <div className="bg-gray-100">
                        <div className="container mx-auto mt-10">
                            {isModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                                    <div className="bg-white rounded-lg p-6 text-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1024 1024"
                                            className="h-16 w-16 text-green-500 inline-block align-middle"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
                                            />
                                        </svg>
                                        <p className="mt-2">Pedido realizado con exito!</p>
                                        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-col md:flex-row shadow-md my-10">
                                <div className="md:w-3/4 bg-white px-10 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                        <h1 className="font-semibold text-2xl">Mi carrito</h1>
                                        <h2 className="font-semibold text-2xl">
                                            {cartItems.length} {cartItems.length === 1 ? 'Producto' : 'Productos'}
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-3 mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase">Producto</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">Cantidad</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">Precio</h3>
                                    </div>
                                    <div>
                                        <ul>
                                            {cartItems.map((item, index) => (
                                                <ProductCart key={index} product={item} />
                                            ))}
                                        </ul>
                                    </div>
                                    <button onClick={() => reversePage()} className="flex font-semibold text-indigo-600 text-sm mt-10">
                                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                        </svg>
                                        Continuar comprando
                                    </button>
                                </div>
                                <div id="summary" className="md:w-1/4 px-8 py-10">
                                    <h1 className="font-semibold text-2xl border-b pb-8">Resumen del pedido</h1>
                                    <div className="py-10">
                                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                            <span>Costo total</span>
                                            <span>${totalCost}</span>
                                        </div>
                                        <input
                                            type="text"
                                            id="address"
                                            placeholder="Ingrese domicilio"
                                            className="p-2 text-sm w-full mt-6"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Ingrese nombre y apellido"
                                            className="p-2 text-sm w-full mt-6"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Ingrese e-mail de pago"
                                            className="p-2 text-sm w-full mt-6"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="border-t mt-8">
                                        <button
                                            onClick={handleOpenModal}
                                            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                                            style={{ opacity: isDisabled ? 0.6 : 1, cursor: isDisabled ? 'not-allowed' : 'pointer' }}
                                            disabled={isDisabled}
                                        >
                                            Efectuar pago
                                        </button>
                                        <Modal
                                            isOpen={showModal}
                                            onRequestClose={handleCloseModal}
                                            className="flex items-center justify-center mx-auto"
                                            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
                                            ariaHideApp={false}
                                            shouldCloseOnOverlayClick={true}
                                        >
                                            <div className="relative bg-white p-4 rounded-lg max-w-[500px] m-4">
                                                <button
                                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                                                    onClick={handleCloseModal}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                <div className="max-h-[580px] overflow-y-auto">
                                                    <BrickComponent />
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}