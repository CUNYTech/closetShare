import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Home from './home';
import Checkout from './checkout';
import Photo from './Photos'
import Register from './register';
import Signin from './signin';
import Profile from './profile_pages/profile';
import Product from './Product_Pages/product';
import ProductCreate from './Product_Pages/productcreate';
import ProductDetail from './Product_Pages/productdetail';

const Entry = (props) => {
    return (
        <div>
        	<Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/create" component={ProductCreate} />
            <Route exact path="/product/productdetail/:id" component={ProductDetail} />
            <Route exact path="/photos" component={Photo} />
            </Switch>
        <Footer />

        </div>
  );
};


export default Entry;
