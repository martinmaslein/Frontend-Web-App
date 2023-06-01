import React, { useEffect, useState } from 'react';
import CartComponent from "src/components/CartComponent.jsx";


function Cart() {

    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
                const response = await fetch(API_URL + '/orders/' + 1);
                const data = await response.json();
                setOrder(data);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchOrders();
    }, [itemId]);

    if (!order) {
        return null;
    }

    return <span>{order.id}</span>;

}

export default Cart;