import React from 'react';
import './App.css';
import logo from './logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton School Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
};

export default App;
