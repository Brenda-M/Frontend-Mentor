import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useCountryDetails from '../hooks/useCountryDetails';
import BackButton from '../components/Button';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';

const CountryDetails: React.FC = () => {
  const { countryName } = useParams<{ countryName?: string }>();
  const { countryDetails, loading, error, getCountryDetails } = useCountryDetails();
  const [borderCountries, setBorderCountries] = useState<{ name: string; link: string }[]>([]);

  const { headerBackgroundColor, headerTextColor } = useTheme()

  useEffect(() => {
    const fetchDetails = async () => {
      if (countryName) {
        await getCountryDetails(countryName);
      }
    };

    fetchDetails();
  }, [countryName, getCountryDetails]);

  useEffect(() => {
    const fetchBorders = async () => {
      if (countryDetails?.borders) {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${countryDetails.borders.join(',')}`
          );
          const borderCountries = response.data.map(
            (border: { name: { common: string } }) => ({
              name: border.name.common,
              link: `/country/${border.name.common}`,
            })
          );
          setBorderCountries(borderCountries);
        } catch (error) {
          console.error('Error fetching border countries:', error);
        }
      }
    };

    fetchBorders();
  }, [countryDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!countryDetails) {
    return <p>Country details not found.</p>;
  }

  // Destructure countryDetails for cleaner code
  const { capital, population, region, subregion, name, tld, currencies, languages, flags } = countryDetails;
  const { common, nativeName } = name;
  const firstNativeName = nativeName ? Object.values(nativeName)[0] : null;
  if (countryDetails.population) {
    console.log('Country Details', countryDetails.population);
  }

  return (
    <div>
      <div className='mb-20'>
        <BackButton />
      </div>
      <div >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
          <div className={`bg-${headerBackgroundColor} rounded-md overflow-hidden shadow-md p-4`}>
            <img src={flags.svg} alt={common} className="object-cover w-full" />
          </div>
          <div>
            {/* country content section */}
            <h2 className="text-3xl font-bold mb-8">{common}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                {firstNativeName && (
                  <p className="mb-2">
                    <strong>Native Name:</strong> {firstNativeName.common}
                  </p>
                )}
                <p className="mb-2">
                  <strong>Population:</strong> {population}
                </p>
                <p className="mb-2">
                  <strong>Region:</strong> {region}
                </p>
                <p className="mb-2">
                  <strong>Sub Region:</strong> {subregion}
                </p>
                <p className="mb-2">
                  <strong>Capital:</strong> {capital}
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong>Top Level Domain:</strong> {tld}
                </p>
                <p className="mb-2">
                  <strong>Currencies:</strong>{' '}
                  {Object.entries(currencies).map(([code, details]) => (
                    <span key={code}>{details.name}, </span>
                  ))}
                </p>
                <p className="mb-2">
                  <strong>Languages:</strong>{' '}
                  {Object.entries(languages).map(([code, name]) => (
                    <span key={code}>{name}, </span>
                  ))}
                </p>
              </div>

            </div>
            {borderCountries.length > 0 && (
              <div className="mt-8">
                <strong>Borders:</strong>{' '}
                {borderCountries.map((border, index) => (
                  <Link
                    to={border.link}
                    key={border.name}
                    className="inline-block px-6 py-1 rounded mr-3 mb-2 transition duration-300 ease-in transform  
                    hover:-translate-y-1 hover:scale-70"
                    style={{ backgroundColor: headerBackgroundColor, color: headerTextColor,  border: '1px solid hsl(0, 0%, 52%)'}}
                  >
                    {border.name}
                  </Link>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
