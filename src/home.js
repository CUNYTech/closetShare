import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
   <Link to="/checkout" style={{color: 'black'}} activeStyle={{color: 'red'}}>Checkout</Link>
  </div>
  );
};


export default Home;
