import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="ml-4 flex lg:ml-0">
      <Link to="/">
        <span className="sr-only">Melody Marketplace</span>
        <img
          className="h-8 w-auto"
          src="https://res.cloudinary.com/dygwxsimn/image/upload/v1685048810/logo2_tendwb.png"
          alt="Melody Marketplace Logo"
        />
      </Link>
    </div>
  );
}

export default Logo;

