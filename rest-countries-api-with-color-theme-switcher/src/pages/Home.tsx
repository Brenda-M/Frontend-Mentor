import React, { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import CountryFilter from '../components/CountryFilter';
import SearchBar from '../components/SearchBar';
import useCountries from '../hooks/useCountries';

const Home: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleFilterChange = (filteredData: any) => {
    setFilteredCountries(filteredData);
  };

  const handleSearch = (query: string) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  if (loading) {
    return <p className="text-center mt-8 text-xl font-semibold">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-xl text-red-500 font-semibold">Error: {error}</p>;
  }

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div className="mb-4 sm:mb-0">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          <CountryFilter countries={countries} onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <div key={country.name.official}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;



