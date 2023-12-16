import React, { useState, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

interface SearchBarProps {
  onSearch: (data: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i;

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string>('');

  const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchQuery}`;

  const handleSearch = async () => {
    if (!ipv4Regex.test(searchQuery) && !ipv6Regex.test(searchQuery)) {
      setError('Valid IP address required');
    } else {
      try {
        const response = await axios.get(apiUrl);
        onSearch(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setError('Please enter an IP address or domain.');
    } else {
      handleSearch();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search for any IP address or domain"
            aria-describedby="ip-search"
            onChange={handleChange}
            value={searchQuery}
          />
          <Button type="submit" variant="outline-secondary">
            <img src="../static/images/icon-arrow.svg" alt="" />
          </Button>
        </InputGroup>
      </Form>
      {error && <div id="error" className="text-danger">{error}</div>}
    </>
  );
};

export default SearchBar;
