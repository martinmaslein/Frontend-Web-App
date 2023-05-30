import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { name } = useParams();

  // Obtener los detalles de la guitarra utilizando el name

  return (
    <div>
      <h2>Product Details:</h2>
      <p>Selected Product name: {name}</p>
      {/* Mostrar los detalles de la guitarra */}
    </div>
  );
}

export default ProductDetails;
