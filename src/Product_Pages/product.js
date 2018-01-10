// need a list of all items with a filter and a search. 
//maybe another page for "My postings"

import React, { Component } from 'react';
import Entry from '../entry';
import firebase, { auth, provider } from '../firebase.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


class Product extends Component {
  constructor() {
    super();
    this.state = {
      productTitle: '',
      description: '',
      price:'',
      products: [],
      user: null, // <-- add this line
      image:''
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
    const imageRef = firebase.storage().ref('images/');
    productsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      for (let product in products) {
        newState.push({
          id: product,
          productTitle: products[product].productTitle,
          description: products[product].description,
          price: products[product].price,
          image: products[product].image
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
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 700,
        height: 450,
        overflowY: 'auto',
      },
    }
    let prod_s = this.state.products.map(function(prod){
      return(
        <GridTile
        key={prod.id}
        title={prod.productTitle}
        subtitle={<span>Price <b>{prod.price}</b></span>}
        containerElement={<Link to ={`/product/productdetail/${prod.id}`}/>}
      >
        <img src={prod.image} />
      </GridTile>
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

        <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>Products</Subheader>
          {prod_s}
        </GridList>
      </div>

      </div>
    );
  }
};

export default Product;
