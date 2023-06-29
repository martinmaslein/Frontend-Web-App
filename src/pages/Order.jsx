import { getProductDetails } from 'tu_archivo_de_utilidades';

export default function Order({ order }) {
    return (
        <div className="border-solid border-2 border-sky-500 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {order.details.map((detail) => {
                const product = getProductDetails(detail.product_id); // Obtener los detalles del producto

                return (
                    <a href="#" className="group" key={detail.product_id}>
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.image} // Utilizar la imagen del producto
                                alt={product.name} // Utilizar el nombre del producto como alt
                                className="object-cover object-center w-full h-full group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3> // Utilizar el nombre del producto
                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> // Utilizar el precio del producto
                    </a>
                );
            })}
        </div>
    );
}
