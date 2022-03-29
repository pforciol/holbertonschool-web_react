import React from 'react';
export const user = { email: '', password: '', isLoggedIn: false };

export const logOut = () => {
  user.isLoggedIn = false;
  user.email = '';
  user.password = '';
};

export const AppContext = React.createContext({
  user,
  logOut,
});
