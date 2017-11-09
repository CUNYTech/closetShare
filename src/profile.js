import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Profile = () => {
  return (
    <div className='home'>
    the page made by sayaka
    <div>
      <Link to="/checkout" style={{color: 'black'}} activeStyle={{color: 'red'}}>Checkout</Link>
    </div>
  </div>
  );
};

export default Profile;