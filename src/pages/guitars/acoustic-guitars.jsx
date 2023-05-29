import React, { useEffect, useState } from 'react';

function AcousticGuitar() {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
	const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
	const response = await fetch(API_URL+ '/products');
	  
	  const data = await response.json();
	  const productsData = data.products.data;
	  setProducts(productsData);
	};
  
	useEffect(() => {
	  fetchProducts();
	}, []);
  
	return (
		<div>
		  <h1>Product List</h1>
		  <ul>
			{Array.isArray(products) && products.map((product) => (
			  <li key={product.id}>{product.name}</li>
			))}
		  </ul>
		</div>
	  );
	}

export default AcousticGuitar;
