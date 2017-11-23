import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import App from './components/App';
import Checkout from './checkout';
import Register from './register';
import Signin from './signin';
import Profile from './profile';



const Entry = (props) => {
    return (
        <div>
            <Route exact path="/" component={ App } />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/profile" component={Profile} />
        </div>
  );
};


export default Entry;
