import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;