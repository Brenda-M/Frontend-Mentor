const BASE_URL = 'https://restcountries.com/v3.1';

export const ENDPOINTS = {
  getAllCountries: `${BASE_URL}/all`,
  getCountryByName: (name: string) => `${BASE_URL}/name/${name}`,
  getCountryByNameWithFullText: (name: string) => `${BASE_URL}/name/${name}?fullText=true`,
  getFilterByRegions: (region:string) =>  `${BASE_URL}/regions/${region}`,
};
