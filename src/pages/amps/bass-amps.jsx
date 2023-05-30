import React, { useEffect, useState } from 'react';
import CenterContent from "src/layouts/CenterContent";
import ProductItem from 'src/components/ProductItem.jsx';

function BassAmps() {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
		const response = await fetch(API_URL + '/products?page=' + 2);

		const data = await response.json();
		const productsData = data.products.data;
		setProducts(productsData);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const filteredProducts = products.filter((product) => product.subcategory_id === 8);

	return (
		<CenterContent>
			<h2 className="sr-only">Products</h2>

			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{filteredProducts.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</CenterContent>
	);
}

export default BassAmps;