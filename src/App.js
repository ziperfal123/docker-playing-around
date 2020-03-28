import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          !! I was changed on the feature branch !!
        </p>
        <a href={'#'}>
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
