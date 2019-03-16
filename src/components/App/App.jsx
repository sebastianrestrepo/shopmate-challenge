import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Filters from '../Filters/Filters';
import Shop from '../Shop/Shop';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <section>
          <Filters />
          <Shop />
          </section>
      </div>
    );
  }
}

export default App;