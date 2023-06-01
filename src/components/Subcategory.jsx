import { useEffect, useState } from 'react';

function Subcategory({ subcategoryId }) {
    const [subcategory, setSubcategory] = useState(null);
  
    useEffect(() => {
      const fetchSubcategory = async () => {
        const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
        const response = await fetch(API_URL + '/subcategories/' + subcategoryId);
        const data = await response.json();
        setSubcategory(data);
      };
  
      fetchSubcategory();
    }, [subcategoryId]);
  
    if (!subcategory) {
      return null; 
    }
  
    return <span>{subcategory.name}</span>;
  }

export default Subcategory;

