// useCountries.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../endpoints';
import { Country } from '../types';

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ENDPOINTS.getAllCountries);
        setCountries(response.data);
        console.log(response.data)
      } catch (error) {
        setError('Error fetching data from Rest Countries API');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { countries, loading, error };
};

export default useCountries;
