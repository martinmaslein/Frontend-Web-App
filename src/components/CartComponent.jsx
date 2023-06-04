import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import ProductCart from './ProductCart';
import { useNavigate } from 'react-router-dom';
import EmailValidate from './emailValidate';

export default function CartComponent() {

    const [cookies, setCookie] = useCookies(['cart']);
    const cartItems = cookies.cart || [];
    const navigate = useNavigate();
    const [totalCost, setTotalCost] = useState(0);

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
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Mi carrito</h1>
                            <h2 className="font-semibold text-2xl">{cartItems.length} Productos</h2>
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

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Resumen del pedido</h1>


                        <div className="py-10">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Costo total</span>
                                <span>${totalCost}</span>
                            </div>

                            <EmailValidate/>

                            <input type="text" id="address" placeholder="Ingrese domicilio" className="p-2 text-sm w-full mt-6" />

                            <input type="text" id="name" placeholder="Ingrese nombre y apellido" className="p-2 text-sm w-full mt-6" />
                        </div>

                        <div className="border-t mt-8">
                            <button onClick={() => createOrder()} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Efectuar pago</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}