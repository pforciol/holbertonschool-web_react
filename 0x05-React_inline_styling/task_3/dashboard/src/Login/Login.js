import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <form>
        <label className={css(styles.label)}>
          Email:
          <input
            type="email"
            name="email"
            autoComplete="email"
            className={css(styles.input)}
          />
        </label>
        <label className={css(styles.label)}>
          Password:
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            className={css(styles.input)}
          />
        </label>
        <button className={css(styles.label)}>OK</button>
      </form>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: '0 0.5em',
  },

  label: {
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
});

export default Login;
