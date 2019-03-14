import React, { Component } from 'react';
import NavBar from './NavBar';
import HambMenu from './HambMenu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
          <HambMenu />
        </header>
      </div>
    );
  }
}

export default App;