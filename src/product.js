// need a list of all items with a filter and a search. 
//maybe another page for "My postings"

import React, { Component } from 'react';
import Entry from './entry';
import firebase, { auth, provider } from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


class Product extends Component {
  constructor() {
    super();
    this.state = {
      productTitle: '',
      description: '',
      price:'',
      products: [],
      test: 'hello world',
      user: null // <-- add this line
    }    
    this.removeItem = this.removeItem.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
      this.setState({ user });
    } 
  });
    const productsRef = firebase.database().ref('products');
    productsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      for (let product in products) {
        newState.push({
          id: product,
          productTitle: products[product].productTitle,
          description: products[product].description,
          price: products[product].price
        });
      }
      this.setState({
        products: newState
      });
    });
  }
  removeItem(productId) {
    const productRef = firebase.database().ref(`/products/${productId}`);
    productRef.remove();
  }
  render(){
    debugger;
    let prod_s = this.state.products.map(function(prod){
      return(
        <li key={prod.id}>
        <h3>{prod.productTitle}</h3>
        <p>Image Here</p>
        <p>Price: {prod.price}</p>
        <Link to={`/product/productdetail/${prod.id}`} style={{color: 'black'}} activeStyle={{color: 'red'}}>details</Link>
      </li>
      );
    });
    return (
      <div>
        <h1>
          Product page
          <br/><Link to={`/product/create/${this.state.test}`} style={{color: 'black'}} activeStyle={{color: 'red'}}>Create a product</Link>
        </h1>
        <ul>{prod_s}</ul>
      </div>
    );
  }
};

export default Product;
