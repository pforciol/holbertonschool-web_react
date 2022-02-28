import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            autoComplete="email"
            className={css(styles.input)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            className={css(styles.input)}
          />
        </label>
        <button>OK</button>
      </form>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: '0 0.5em',
  },
});

export default Login;
