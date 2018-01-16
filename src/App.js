import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stitch</h1>
        </header>
        <Grid />
      </div>
    );
  }
}

export default App;
