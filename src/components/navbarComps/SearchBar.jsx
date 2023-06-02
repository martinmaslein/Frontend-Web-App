import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const productListRef = useRef(null);

    useEffect(() => {
        fetchProducts();
    }, []);


    const fetchProducts = async () => {
        const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
        const response = await fetch(API_URL + '/products');
        const data = await response.json();
        const productsData = data.products.data;
        setProducts(productsData);
    };

    const filterProducts = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        filterProducts();
    };

    return (
        <div className="p-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar Productos..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded"
                />
                {searchTerm && filteredProducts.length > 0 && (
                    <ul ref={productListRef} className="mt-2 absolute bg-white w-full">
                        {filteredProducts.map((product) => (
                            <li
                                key={product.id}
                                className="p-2 border border-gray-300 rounded"
                            >
                                <Link to={`/Product/${product.id}/${encodeURIComponent(product.name)}`}>{product.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
