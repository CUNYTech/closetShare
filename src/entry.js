import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Play from './Play';
import Home from './home';
import Checkout from './checkout';


const Entry = (props) => {
    return (
        <div>
            <Route exact path="/" component={ Play } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/checkout" component={Checkout} />
        </div>
  );
};


export default Entry;
