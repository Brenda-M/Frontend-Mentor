export interface Country {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        common: string;
        official: string;
      };
    };
  };
  capital: string;
  population: number;
  region: string;
  subregion: string;
  tld: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  borders: string[];
  languages: string[];
}
