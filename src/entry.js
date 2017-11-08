import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Play from './Play';
import Home from './home';
import Checkout from './checkout';
import Photo from './photo'

const Entry = (props) => {
    return (
        <div>
            <Route exact path="/" component={ Play } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/photos" component={Photo} />
        </div>
  );
};


export default Entry;
