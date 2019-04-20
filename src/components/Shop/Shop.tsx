import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../../stores/stores';

@observer
class Shop extends Component {
    constructor(props: {}) {
      super(props);

      store.getCategories();
    }
  
    render() {
      return (<div className="shop">
        {(store.currentDept === null)
        ? <h3>Explore all our products!</h3>
        : <h3>Explore {store.pageTitle}</h3>}
        </div>);
    }
  }
  
  export default Shop;