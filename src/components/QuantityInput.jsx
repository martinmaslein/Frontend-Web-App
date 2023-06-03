import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";
import { useCookies } from 'react-cookie';

function QuantityInput({ product }) {

    const [cookies, setCookie] = useCookies(['cart']);
    const cartItems = cookies.cart;
    const [quantity, setQuantity] = useState(product.quantity);

    function handleDecrease(){
        if (quantity > 1) {  
            cartItems.map((item, index) => {
                if (item.id == product.id) {  
                    item.quantity = quantity-1;
                    setQuantity(item.quantity);
                    setCookie('cart', cartItems, { path: '/' });
                }
            });
        }
    }

    function handleIncrease(){ 
        cartItems.map((item, index) => {
            if (item.id == product.id) {
                item.quantity = quantity+1;
                setQuantity(item.quantity);
                setCookie('cart', cartItems, { path: '/' });
            }
        });
    }

    return (
        <div className="flex justify-center w-1/8">
            <div
                className="flex items-center justify-center bg-gray-200 rounded-l cursor-pointer"
                onClick={() => handleDecrease()}
            >
                <ChevronLeft className="fill-current text-gray-600 w-3" />
            </div>
            <input
                className="mx-2 border text-center w-8"
                type="text"
                value={quantity}
                readOnly
            />
            <div
                className="flex items-center justify-center bg-gray-200 rounded-r cursor-pointer"
                onClick={() => handleIncrease()}
            >
                <ChevronRight className="fill-current text-gray-600 w-3" />
            </div>
        </div>

    );
}
export default QuantityInput;