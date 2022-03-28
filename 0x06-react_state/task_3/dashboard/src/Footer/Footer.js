import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';

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
