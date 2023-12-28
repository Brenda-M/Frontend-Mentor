import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import Loader from './components/Loader';
import { MapContainer } from 'react-leaflet';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchData, setSearchData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(''); // Updated to an empty string initially
  const [userIPAddress, setUserIPAddress] = useState<any>(null);

  const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  const handleSearch = (data: any) => {
    setSearchData(data);
  };

  useEffect(() => {
    const getUserIPAddress = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setUserIPAddress(response.data);
      } catch (error) {
        console.error('Error fetching user IP address:', error);
        setError('Error fetching user IP address. Please try again.'); // Set an error message
      } finally {
        setLoading(false);
      }
    };

    getUserIPAddress();
  }, [apiUrl]);

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
        {loading && <Loader />}
        {error && <div className="error-message">{error}</div>}
        {userIPAddress && !loading && (
          <>
            {userIPAddress.ip && (
              <div className="address">
                <h2>IP Address</h2>
                <p>{userIPAddress.ip}</p>
              </div>
            )}
            {userIPAddress.location && userIPAddress.location.city && (
              <div className="location">
                <h2>Location</h2>
                <p>{userIPAddress.location.city}</p>
              </div>
            )}
            {userIPAddress.location && userIPAddress.location.timezone && (
              <div className="time">
                <h2>Timezone</h2>
                <p>UTC {userIPAddress.location.timezone}</p>
              </div>
            )}
            {userIPAddress.isp && (
              <div className="isp">
                <h2>ISP</h2>
                <p>{userIPAddress.isp}</p>
              </div>
            )}
          </>
        )}
      </div>
      <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={false}>
        <Map userPosition={userIPAddress && [userIPAddress.location.lat, userIPAddress.location.lng]} />
      </MapContainer>
    </div>
  );
}

export default App;
