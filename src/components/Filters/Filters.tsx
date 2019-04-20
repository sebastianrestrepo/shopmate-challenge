import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';
import DepartmentsFilter from '../Filters/DeparmentsFilter';
import CategoriesFilter from '../Filters/CategoriesFilter';

class Filters extends Component {
  constructor(props: {}) {
    super(props);

    store.getCategories();
  }

  render() {
    return (<div className="filt-section">
      <div className="filt-title">
        <h3>Filter 486 items</h3>
      </div>
      <div className="filters">
        <h3>{store.departments ? 'Departments' : 'Loading Departments...'}</h3>
        <DepartmentsFilter />
        <CategoriesFilter />
      </div>
    </div>);
  }
}

export default observer(Filters);