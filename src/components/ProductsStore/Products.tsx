import React, { Component } from 'react';
import store from '../../stores/stores';

class Products extends Component {

    constructor(props: {}) {
        super(props);
        store.getProducts();
    }

    render() {
        return <div className="products">{
            store.products && store.products.map((pro) => {
                return <div className='prod-cont' key={pro.product_id}>
                    <img src={'https://backendapi.turing.com/images/products/' + pro.thumbnail} alt="" />
                    <div className='info-cont'>
                        <h3>{pro.name}</h3>
                        <h4>£ {pro.price}</h4>
                        <p>{/*pro.description*/}</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            })
        }
        </div>
    }
}

export default Products;