import QuantityInput from './QuantityInput';
import { useCookies } from 'react-cookie';

function ProductCart({ product }) {

    const [cookies, setCookie] = useCookies(['cart']);

    function removeItem() {

        const cartItems = cookies.cart;

        cartItems.map((item, index) => {
            if (item.id === product.id) {
                cartItems.splice(index, 1);
            }
        });

        setCookie('cart', cartItems, { path: '/' });
    }

    return (
        <div className="grid grid-cols-3 items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex flex-col justify-between ml-4 flex-grow">
                <div className="flex items-center justify-center">
                    <img className="h-32 w-32" src={product.image_link} alt="" />
                </div>
                <span className="font-bold text-md text-center">{product.name}</span>
                <button
                    onClick={() => removeItem()}
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                    Remove
                </button>
            </div>

            <div>
                <QuantityInput product={product} />
            </div>
            <span className="text-center font-semibold text-sm">${product.price * product.quantity}</span>
        </div>
    );
}

export default ProductCart;