"use strict";
import React, { Component } from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';

class Header extends Component{
render(){
return(
 <div className='header'>
 <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      	<ul className="navbar-header">
         <li><input type="text"  name="search" placeholder="Search here ...." className="glyphicon glyphicon-search"></input>
</li></ul>
   

      <ul className="nav navbar-nav navbar-right"> 
      <li><a href="#/register"><span className="glyphicon glyphicon-user"></span>Sign up</a></li>
      <li><a href="#/signin"><span className="glyghicon glyphicon-log-in"></span>Sign in</a></li>

      <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">MY ACCOUNT
          <span className="caret"></span>
      </a>
      <ul className="dropdown-menu">
           <li><a href="#">Inbox</a></li>
           <li><a href="#">Order History</a></li>
           <li><a href="#">Sales History</a></li>
           <li><a href="#">Donations</a></li>
           <li><a href="#">Profile</a></li>
           <li><a href="#">Settings</a></li>
           <li><a href="#">Log Out</a></li>
        </ul>
</li>
  
   <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
  </ul>
</div>
</nav>
</div>
 
);
}
}
export default Header

