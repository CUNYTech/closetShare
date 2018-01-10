"use strict";
import React, { Component} from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import Header from './header';
import Cover from './cover';
import Homepage from './homepage';


class Main extends Component {
render(){
return(
     <div className = "main">
     
    
     <Cover/>
     <Homepage/>
     

    </div>
     );
   }
}
export default Main


