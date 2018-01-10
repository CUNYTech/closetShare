"use strict";
import React, { Component} from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import Cover from './cover';
import Homepage from './homepage';
import './main.css';


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


