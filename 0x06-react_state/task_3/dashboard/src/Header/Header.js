import React from 'react';

import { AppContext } from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

import logo from '../assets/logo.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={('App-header', css(styles.appHeader))}>
        <img
          src={logo}
          alt="Holberton School Logo"
          className={css(styles.appHeaderImg)}
        />
        <h1>School dashboard</h1>
        {user && user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b className={css(styles.logoutSectionB)}>{user.email}</b>{' '}
            <span className={css(styles.logoutSectionSpan)} onClick={logOut}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}

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

  logoutSection: {
    color: 'black',
    position: 'absolute',
    right: 0,
    paddingRight: '20px',
    alignSelf: 'flex-end',
  },

  logoutSectionSpan: {
    fontStyle: 'italic',
    cursor: 'pointer',
  },

  logoutSectionB: {
    fontWeight: 'bold',
  },
});

Header.contextType = AppContext;

export default Header;
