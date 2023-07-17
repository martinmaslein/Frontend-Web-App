import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { apiUrl } from "../utils/constantes";

export default function Order({ order }) {
    const [products, setProducts] = useState([]);
    const isLoading = useRef(true);

    const getProductDetails = async (product_id) => {
        axios.get(apiUrl + 'products/' + product_id).then(response => {
            setProducts((products) => [...products, response.data.product]);
        });
    };

    useEffect(() => {
        if (isLoading.current === true) {
            order.details.forEach((detail) => {
                const productExists = products.find((product) => product.id === detail.product_id);
                if (!productExists) {
                    getProductDetails(detail.product_id);
                }
            });
            return () => { isLoading.current = false; };
        }
    }, []);

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => {
                const detail = order.details.find((detail) => detail.product_id === product.id);
                const quantity = detail ? detail.quantity : 0;

                return (
                    <div key={index} className="group p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.image_link}
                                alt={product.name}
                                className="object-cover object-center w-full h-full group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        <p className="mt-1 text-sm text-gray-500">Cantidad: {quantity}</p>
                    </div>
                );
            })}
        </div>
    );
}
