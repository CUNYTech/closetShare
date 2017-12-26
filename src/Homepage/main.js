"use strict";
import React, { Component} from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import Header from './header';
import Cover from './cover';
import Footer from './footer';
import Homepage from './homepage';


class Main extends Component {
render(){
return(
     <div className = "main">
     
     <Header/>
     <Cover/>
     <Homepage/>
     <Footer/>
     

    </div>
     );
   }
}
export default Main


