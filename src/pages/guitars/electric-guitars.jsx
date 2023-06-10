import React, { useEffect, useState } from 'react';
import ProductItem from 'src/components/ProductItem.jsx';
import CenterContent from "src/layouts/CenterContent.jsx";
import Subcategory from "src/components/Subcategory.jsx";
import Loading from 'src/components/Loading.jsx';

function ElectricGuitar() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchProducts = async () => {
		const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
		const response = await fetch(API_URL + '/products');

		const data = await response.json();
		const productsData = data.products.data;
		setProducts(productsData);
		setLoading(false);

	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const filteredProducts = products.filter((product) => product.subcategory_id === 1);

	return (
		<div>
			<CenterContent>
				{loading ? (
					<div className="flex items-center justify-center h-screen">
						<Loading />
					</div>
				) : (
					<>
						<h2 className="text-2xl font-bold mb-4"><Subcategory subcategoryId={1} /></h2>
						<h2 className="sr-only">Products</h2>
						<div className="flex justify-center">
							<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
								{filteredProducts.map((product) => (
									<ProductItem key={product.id} product={product} />
								))}
							</div>
						</div>
					</>
				)}
			</CenterContent>
		</div>

	);
}

export default ElectricGuitar;