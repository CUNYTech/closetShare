"use strict";
import React, { Component } from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import styles from '../index.css';


class Cover extends Component{
render(){
return(
<div className= "cover">
   <div className="jumbotron">
      <h1> Welcome To ClosetShare</h1>
      <p> The Future of Giving</p>
  </div>
</div>



);
}
}
export default Cover;
