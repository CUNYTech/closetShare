import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
   adgdzhdfhdfhdfghdf
   <Link to="/checkout" style={{color: 'black'}} activeStyle={{color: 'red'}}>Checkout</Link>
   <Link to="/product" style={{color: 'black'}} activeStyle={{color: 'red'}}>Product</Link>
  </div>
  );
};


export default Home;
