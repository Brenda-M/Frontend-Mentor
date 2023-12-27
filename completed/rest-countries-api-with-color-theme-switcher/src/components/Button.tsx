import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  const { headerTextColor, headerBackgroundColor } = useTheme();

  return (
    <div>
      <Link to="/">
        <button
          type="button"
          className="py-2 px-4 rounded shadow-md transition duration-300 ease-in transform  
          hover:-translate-y-1 hover:scale-70  "
          style={{ backgroundColor: headerBackgroundColor, color: headerTextColor }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3 text-md" />
          Back
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
