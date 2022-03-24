import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.email !== this.state.email ||
      prevState.password !== this.state.password
    ) {
      this.setState({
        enableSubmit:
          this.state.email.length > 0 && this.state.password.length > 0,
      });
    }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.label)}>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              autoComplete="email"
              className={css(styles.input)}
            />
          </label>
          <label className={css(styles.label)}>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              autoComplete="current-password"
              className={css(styles.input)}
            />
          </label>
          <input
            type="submit"
            value="OK"
            className={css(styles.label)}
            disabled={!this.state.enableSubmit}
          />
        </form>
      </React.Fragment>
    );
  }
}

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
