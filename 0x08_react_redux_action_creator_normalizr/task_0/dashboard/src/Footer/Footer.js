import React, { useContext } from 'react';

import { AppContext } from '../App/AppContext';
import { getFooterCopy, getFullYear } from '../utils/utils';

import './Footer.css';

const Footer = () => {
  const value = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {value.user.isLoggedIn && (
        <p>
          <a>Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
