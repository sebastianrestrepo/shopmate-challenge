import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Filters from '../Filters/Filters';
import Shop from '../Shop/Shop';
import './App.css';

import api from '../../utils/api';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

class App extends Component {
  constructor(props: {}) {
    super(props);
    store.getDepartments();
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

export default observer(App);