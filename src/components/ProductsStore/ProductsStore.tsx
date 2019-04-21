import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../../stores/stores';
import Products from '../ProductsStore/Products';

@observer
class ProductsStore extends Component {
    constructor(props: {}) {
      super(props);

      store.getCategories();
    }
  
    render() {
      return (<div className="store">
        {(store.currentDept === null)
        ? <h3>Explore all our products!</h3>
        : <h3>Explore {store.pageTitle}</h3>}
        <div className="products-list">
        <Products />
        </div>
        </div>);
    }
  }
  
  export default ProductsStore;