import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <NavBar />
      </div>
    );
  }
}

export default App;