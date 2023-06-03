import React, { useEffect, useState } from 'react';
import CartComponent from "src/components/CartComponent.jsx";
import CenterContent from "src/layouts/CenterContent.jsx";


function Cart() {
    return (
        <CenterContent>
            <CartComponent />
        </CenterContent>
    );
}

export default Cart;