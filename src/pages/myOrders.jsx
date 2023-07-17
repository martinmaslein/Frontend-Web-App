import Order from "src/pages/Order";
import { Cookies } from 'react-cookie';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { apiUrl } from "../utils/constantes";

export default function MyOrders() {

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const cookie = new Cookies();
        const token = cookie.get("auth_token");
        axios.get(apiUrl + 'orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setOrders(response.data.orders);
        }).catch((error) => {
            console.log("Error en el adsasdsdasdasddas", error);
        });
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="bg-white text-center">
            <h2 className="text-3xl font-bold mb-4">Mis Pedidos</h2>
            {orders && (
                <div className="container mx-auto max-w-2xl px-4 py-16">
                    {orders.map((order, index) => (
                        <div key={order.id} className="mb-8">
                            <h3 className="text-lg font-semibold mb-2">Orden {index + 1}</h3>
                            {order && (
                                <div className="border border-gray-300 rounded p-4">
                                    <Order order={order} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}