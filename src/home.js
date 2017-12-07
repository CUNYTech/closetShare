import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
      <h2>
        This is Home Navigation is now on The app bar
      </h2>
  </div>
  );
};


export default Home;
