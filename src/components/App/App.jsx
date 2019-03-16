import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import HambMenu from '../NavBar/HambMenu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showHambMenu: false };
  }

  handleHambMenu() {
    console.log('show hamb menu');
    this.setState(prevState => {
      return { 
        showHambMenu: !prevState.showHambMenu 
      };
    });
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