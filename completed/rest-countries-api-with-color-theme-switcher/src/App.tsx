import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './layouts/AppLayout';
import './App.css';
import CountryDetail from './pages/CountryDetail';
import { ThemeProvider } from './context/ThemeContext';



function App() {

  return (
    <Router>
      <ThemeProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<CountryDetail />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
