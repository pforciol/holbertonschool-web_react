import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={('App-header', css(styles.appHeader))}>
        <img
          src={logo}
          alt="Holberton School Logo"
          className={css(styles.appHeaderImg)}
        />
        <h1>School dashboard</h1>
        {this.context.user && this.context.user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome{' '}
            <b className={css(styles.logoutSectionB)}>
              {this.context.user.email}
            </b>{' '}
            <span
              className={css(styles.logoutSectionSpan)}
              onClick={this.context.logOut}
            >
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
