// Header.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode, headerBackgroundColor, headerTextColor } = useTheme();

  return (
    <div className="py-4 shadow-md" style={{ backgroundColor: headerBackgroundColor, color: headerTextColor }}>
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 flex justify-between items-center">
        <Link to='/'>
          <div className="text-xl font-semibold">Where in the world?</div>
        </Link>
        <div className="cursor-pointer flex items-center" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={faMoon} className="mr-2" />
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
