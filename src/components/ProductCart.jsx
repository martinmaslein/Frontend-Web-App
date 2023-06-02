import QuantityInput from './QuantityInput';

export default function ProductCard({ product }) {

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-3/5">
                <div className="w-20">
                    <img className="h-24" src={product.image_link} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{product.name}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
            </div>
            <div>
                <QuantityInput />
            </div>
            <span className="text-center w-2/4 font-semibold text-sm">${product.price}</span>
        </div>
    );
}