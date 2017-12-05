// need a list of all items with a filter and a search. 
//maybe another page for "My postings"

import React, { Component } from 'react';
import Entry from '../entry';
import firebase, { auth, provider } from '../firebase.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


class Product extends Component {
  constructor() {
    super();
    this.state = {
      productTitle: '',
      description: '',
      price:'',
      products: [],
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
    const imageRef = firebase.storage().ref('images');
    // debugger;
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
    let prod_s = this.state.products.map(function(prod){
      return(
        <div className="col-md-3" key={prod.id}>
        <Card >
        <CardMedia
          overlay={<CardTitle title={prod.productTitle} />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle>
        {prod.productTitle}
        </CardTitle>
        <CardText>
        {prod.price}
        </CardText>
        <CardActions>
        <Link to={`/product/productdetail/${prod.id}`} style={{color: 'black'}}><FlatButton label="Details" /></Link>
          
        </CardActions>
      </Card>
      <br/><br/><br/><br/><br/><br/><br/>
      </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>
            Product page
            <br/>
         </h1>
         <h3>
         <Link to={`/product/create`} style={{color: 'black'}}>Create a product</Link>
         <br/><br/><br/></h3>
        </div>
        <ul>{prod_s}</ul>
      </div>
    );
  }
};

export default Product;
