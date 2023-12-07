import { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../endpoints';
import { Country } from '../types';

interface UseCountryDetailsResult {
  countryDetails: Country | null;
  loading: boolean;
  error: string | null;
  getCountryDetails: (countryName: string) => Promise<void>;
}

const useCountryDetails = (): UseCountryDetailsResult => {
  const [countryDetails, setCountryDetails] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCountryDetails = async (countryName: string): Promise<void> => {
    try {
      const response = await axios.get(ENDPOINTS.getCountryByName(countryName));
      console.log('API Response:', response);
      setCountryDetails(response.data[0]);
    } catch (error) {
      console.error('Error fetching country details:', error);
      setError('Error fetching country details');
    } finally {
      setLoading(false);
    }
  };

  return { countryDetails, loading, error, getCountryDetails };
};

export default useCountryDetails;
