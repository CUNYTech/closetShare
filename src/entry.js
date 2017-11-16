import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Play from './Play';
import Home from './home';
import Checkout from './checkout';
import Product from './product';
import ProductCreate from './productcreate';
import ProductDetail from './productdetail';

const Entry = (props) => {
    return (
        <div>
            <Route exact path="/" component={ Play } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/create/:id" component={ProductCreate} />
            <Route exact path="/product/productdetail" component={ProductDetail} />
        </div>
  );
};


export default Entry;
