import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';


interface CountrySearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<CountrySearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { headerBackgroundColor, headerTextColor } = useTheme();

  const handleSearch = () => {
    setError(null);
    try {
      onSearch(searchQuery);
    } catch (error) {
        setError('An error occurred during the search.');
    
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
    if (searchQuery.trim() === '') {
      setError('Please enter a search query.');
      setTimeout(() => {
        setError(null);
      }, 5000);
    } else{
      onSearch(searchQuery)
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="flex items-center">
        <div className="relative">
          <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2" />
          <input
            className={`pl-8 pr-2 py-4 h-full w-96 outline-none text-sm rounded shadow-md ${error ? 'border border-red-500' : ''
              }`}
            type="text"
            id="search"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ backgroundColor: headerBackgroundColor, color: headerTextColor }}
          />
        </div>

      </div>

    </div>

  );
};

export default SearchBar;
