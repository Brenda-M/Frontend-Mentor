import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';


interface CountryFilterProps {
  countries: any[];
  onFilterChange: (filteredData: any) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({ countries, onFilterChange }) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { darkMode, headerBackgroundColor, headerTextColor} = useTheme();

  const filterByRegion = (region: string | null) => {
    setSelectedRegion(region);
    if (region) {
      const filtered = countries.filter((country) => country.region === region);
      onFilterChange(filtered);
    } else {
      onFilterChange(countries);
    }
    // Close the dropdown after selecting a region
    setDropdownVisible(false);
  };

  return (
    <div className={`my-3 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`relative inline-block text-left`}>
        <div>
          <button
            type="button"
            className={`inline-flex justify-between w-full px-3 py-4 text-sm font-medium rounded-md focus:outline-none shadow-md`}
            id="regionDropdown"
            onClick={() => setDropdownVisible(!dropdownVisible)}
            style={{backgroundColor: headerBackgroundColor}}
          >
            {selectedRegion ? `Region: ${selectedRegion}` : 'Filter by Region'}
          </button>
        </div>
        {dropdownVisible && (
          <div
            className={`origin-top-right absolute right-0 mt-2 w-56 z-40 rounded-md shadow-lg`}
            style={{backgroundColor: headerBackgroundColor, color: headerTextColor}}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="regionDropdown"
          >
            <div className={`py-1`} role="none">
              <button
                className={`block w-full px-4 py-2 text-sm text-left ${darkMode ? 'hover:bg-darkBlue' : 'hover:bg-gray-100'}`}
                onClick={() => filterByRegion(null)}
                role="menuitem"
              >
                All Regions
              </button>
              {Array.from(new Set(countries.map((country) => country.region))).map((region, index) => (
                <button
                  key={index}
                  className={`block w-full px-4 py-2 text-sm text-left ${darkMode ? 'hover:bg-darkBlue' : 'hover:bg-gray-100'}`}
                  onClick={() => filterByRegion(region)}
                  role="menuitem"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryFilter;
