import { useCookies } from 'react-cookie';
import React from 'react';
import ProductCart from './ProductCart';
import { useNavigate } from 'react-router-dom';

export default function CartComponent() {

    const [cookies] = useCookies(['cart']);
    const cartItems = cookies.cart || [];
    const navigate = useNavigate();

    function reversePage() {
        navigate(-1);
    }

    // function totalCost(){

    //     let totalCost;
    //     cartItems.map((item, index) => {
    //         totalCost += item.quantity * item.price;
    //     });

    //     setCookie('cart', cartItems, { path: '/' });
    // }

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
                                <span>$600</span>
                            </div>
                            <input type="text" id="validate" placeholder="Ingrese e-mail de pago" className="p-2 text-sm w-full" />
                        </div>


                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Validar e-mail</button>
                        <div className="border-t mt-8">

                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Efectuar pago</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}