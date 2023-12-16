import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Map from './components/Map';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchData, setSearchData] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [userIPAddress, setUserIPAddress] = useState<any>(null);

  const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  const handleSearch = (data: any) => {
    setSearchData(data);
  }

  useEffect(() => {
    const getUserIPAddress = async () => {
      try {
        const response = await axios.get(apiUrl);
        setUserIPAddress(response.data);
      } catch (error) {
        setError('Error fetching user IP address');
      }
    };

    getUserIPAddress();
  }, []);

  useEffect(() => {
    if (searchData) {
      setUserIPAddress(searchData);
    }
  }, [searchData]);

  return (
    <div className="main">
      <div className="hero">
        <h1 className="title">IP Address Tracker</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="results">
        {userIPAddress && (
          <>
            {userIPAddress.ip && (
              <div className="address">
                <p><strong>IP Address:</strong> {userIPAddress.ip}</p>
              </div>
            )}
            {userIPAddress.location && userIPAddress.location.city && (
              <div className="location">
                <p><strong>Location:</strong> {userIPAddress.location.city}</p>
              </div>
            )}
            {userIPAddress.location && userIPAddress.location.timezone && (
              <div className="time">
                <p><strong>Timezone:</strong> {userIPAddress.location.timezone}</p>
              </div>
            )}
            {userIPAddress.isp && (
              <div className="isp">
                <p><strong>ISP:</strong> {userIPAddress.isp}</p>
              </div>
            )}
          </>
        )}
      </div>
      <div>
        <Map/>
      </div>
    </div>
  );
}

export default App;
