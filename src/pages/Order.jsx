export default function Order({ order }) {
    return (
        <div className="border-solid border-2 border-sky-500 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {order.details.map((detail) => (
                <a href="#" className="group" key={detail.product_id}>
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                            className="object-cover object-center w-full h-full group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                </a>
            ))}
        </div>
    );
}  