import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
  

   <Link to="/checkout" style={{color: 'black'}} >Checkout</Link>
   <br />
   <Link to="/register" style={{color: 'black'}} >Register</Link>
   <br />
   <Link to="/signin" style={{color: 'black'}} >Sign in</Link>
   <br />
   <Link to="/product" style={{color: 'black'}} activeStyle={{color: 'red'}}>Product</Link>
  </div>
  );
};


export default Home;
