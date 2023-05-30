import React, { useEffect, useState } from 'react';
import CenterContent from "src/layouts/CenterContent.jsx";

function Organs() {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
		const response = await fetch(API_URL + '/products?page=' + 3);

		const data = await response.json();
		const productsData = data.products.data;
		setProducts(productsData);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const filteredProducts = products.filter((product) => product.subcategory_id === 14);

	return (
		<CenterContent>
			<h2 className="sr-only">Products</h2>

			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{filteredProducts.map((product) => (
					<a key={product.id} href={"#"} className="group">
						<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
							<img
								src={product.image_link}
								alt={product.name}
								className="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
						</div>
						<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
						<p className="mt-1 text-lg font-medium text-gray-900">{"$" + product.price}</p>
					</a>
				))}
			</div>
		</CenterContent>
	);
}

export default Organs;