import React, { useEffect, useState } from 'react';
import CartComponent from "src/components/CartComponent.jsx";
import BrickComponent from "src/components/BrickComponent.jsx";
import CenterContent from "src/layouts/CenterContent.jsx";

function Cart() {
    return (
        <CenterContent>
            <CartComponent />

            {/* <BrickComponent /> */}
        </CenterContent>

    );
}

export default Cart;