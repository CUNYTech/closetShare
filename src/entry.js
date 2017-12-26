import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Checkout from './Checkout/checkout';
import Photo from './photo';
import Register from './register';
import Footer from './footer';
import Signin from './signin';
import Profile from './profile_pages/profile';
import Product from './Product_Pages/product';
import ProductCreate from './Product_Pages/productcreate';
import ProductDetail from './Product_Pages/productdetail';
import Main from './Homepage/main';
import About from './about';

const Entry = (props) => {
    return (
        <div>
        	<Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/create" component={ProductCreate} />
            <Route exact path="/product/productdetail/:id" component={ProductDetail} />
            <Route exact path="/photos" component={Photo} />
            <Route exact path="/aboutus" component={About} />
            </Switch>
        <Footer />

        </div>
  );
};


export default Entry;
