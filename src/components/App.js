"use strict";
import React, { Component} from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from './homepage';


class App extends Component {
render(){
return(
     <div className = "app">
     
     <Header/>
     <Homepage/>
     <Footer/>
     

    </div>
     );
   }
}
export default App


