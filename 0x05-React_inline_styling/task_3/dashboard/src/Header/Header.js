import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <div className={('App-header', css(styles.appHeader))}>
      <img
        src={logo}
        alt="Holberton School Logo"
        className={css(styles.appHeaderImg)}
      />
      <h1>School dashboard</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    height: '20vh',
    display: 'flex',
    alignItems: 'center',
    color: '#e1003c',
    borderBottom: '4px solid #e1003c',
  },

  appHeaderImg: {
    height: '100%',
    width: 'auto',
  },
});

export default Header;
