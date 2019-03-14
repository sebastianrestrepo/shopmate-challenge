import React, { Component } from 'react';
import NavBar from './NavBar';
import HambMenu from './HambMenu';
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
        <header>
          <NavBar onClick={this.handleHambMenu.bind(this)} showHambMenu={this.state.showHambMenu} />
          {(this.state.showHambMenu)? <HambMenu/> : ""}
        </header>
      </div>
    );
  }
}

export default App;