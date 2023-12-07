import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { population, region, capital, name } = country;

  return (
    <div className="aspect-w-3 aspect-h-4">
      <div className="rounded overflow-hidden shadow-lg flex flex-col h-full transform transition duration-300 hover:scale-105">
        <Link to={`/country/${name.common}`} className="flex flex-col h-full">
          {/* <div className="relative aspect-w-3 aspect-h-2"> */}
          <div className="relative h-48">
            <img
              className="w-full h-full object-cover aspect-h-2"
              src={country.flags.svg}
              alt={`${name.common} Flag`}
            />
          </div>
          <div className="px-6 py-4 mb-auto">
            <p
              className="font-bold text-lg inline-block my-4"
            >
              {name.common}
            </p>
            <p className="text-sm">
              <strong>Population:</strong> {population}
            </p>
            <p className=" text-sm">
              <strong>Region:</strong> {region}
            </p>
            <p className="text-sm">
              <strong>Capital:</strong> {capital}
            </p>
            <p className="text-sm">
              <strong>Population:</strong> {population}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
