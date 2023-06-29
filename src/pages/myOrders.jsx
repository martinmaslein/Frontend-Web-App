import Order from "./order";
import { Cookies } from 'react-cookie';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function MyOrders() {

    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        const cookie = new Cookies();
        const token = cookie.get("auth_token");
        const API_URL = 'http://127.0.0.1:8000/rest'

        axios.get(API_URL + '/orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setOrders(response.data.orders);
        });
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="bg-white">
            <h2>Ordenes</h2>
            {orders && (
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {orders.map((order) => (<Order order={order} />))}
                </div>
            )}
        </div>
    );
}