import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Home from './home';
import Checkout from './checkout';
import Register from './register';
import Signin from './signin';
import Profile from './profile_pages/profile';
import Product from './Product_Pages/product';
import ProductCreate from './Product_Pages/productcreate';
import ProductDetail from './Product_Pages/productdetail';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Entry = (props) => {
    return (
        <div>
            <Route exact path="/" component={ Home } />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/create/:id" component={ProductCreate} />
            <Route exact path="/product/productdetail/:id" component={ProductDetail} />
        </div>
  );
};


export default Entry;
