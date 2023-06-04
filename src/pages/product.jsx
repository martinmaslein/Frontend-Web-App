import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductOverview from "src/components/ProductOverview.jsx";

function ProductDetails() {
  const { id, name } = useParams();
  const [guitarDetails, setGuitarDetails] = useState(null);

  useEffect(() => {

    const fetchGuitarDetails = async () => {
      try {
        const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
        const response = await fetch(API_URL + '/products/' + id);

        const data = await response.json();

        const guitarDetailsData = data.product;
        setGuitarDetails(guitarDetailsData);
      } catch (error) {
        console.error('Error fetching guitar details:', error);
      }
    };

    fetchGuitarDetails();
  }, [id, name]);

  return (

    <section className="text-gray-600 body-font overflow-hidden">
      {guitarDetails ? (
        <div> 
          <ProductOverview key={guitarDetails.id} guitarDetails={guitarDetails} />
           </div>
      ) : (
        <div className="loading">Loading guitar details...</div>
      )}
    </section>
  );
}

export default ProductDetails;
