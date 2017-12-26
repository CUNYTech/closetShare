"use strict";
import React, { Component} from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import Header from './header';
import Cover from './cover';
import Footer from './footer';
import Homepage from './homepage';


class AppR extends Component {
render(){
return(
     <div className = "app">
     
     <Header/>
     <Cover/>
     <Homepage/>
     <Footer/>
     

    </div>
     );
   }
}
export default AppR


