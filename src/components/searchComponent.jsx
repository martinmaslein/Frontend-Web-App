import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Replace 'your-icon-library' with the actual library you are using for the icon

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
  
    const handleSearch = () => {
      // Implement your search logic here
      console.log('Searching for:', searchQuery);
      // Reset search query
      setSearchQuery('');
      // Show the search input again
      setShowSearch(false);
    };
  
    const handleSearchIconClick = () => {
      setShowSearch(true);
    };
  
    return (
      <div className="flex items-center">
        {showSearch ? (
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={handleSearch}>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button onClick={handleSearchIconClick}>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </button>
        )}
      </div>
    );
  };
  
  export default SearchComponent;
