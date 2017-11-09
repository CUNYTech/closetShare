import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Product = () => {
  return (
    <h1>
    Product page
    <Link to="/product/create" style={{color: 'black'}} activeStyle={{color: 'red'}}>Create a product</Link>
    </h1>
    
  );
};


export default Product;
