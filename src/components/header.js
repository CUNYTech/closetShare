
import React, { Component } from 'react';
import {Link} from 'react-router';
import { Route, Redirect, Switch,HashRouter} from 'react-router-dom';
import styles from '../index.css';


class Header extends Component{
render(){
return(
 <div className='header'>
    <div className="navbar">
        <div className="dropdown">
           <button className="dropbtn">My Account
           <i className="caret"/>
           </button>
           <div className="dropdown-content">
              <a href="#">Inbox</a>
              <a href="#">Order History</a>
              <a href="#">Sales History</a>
              <a href="#">Donations</a>
              <a href="#/profile">Profile</a>
              <a href="#">Settings</a>
              <a href="#">LogOut</a>
            </div>
         </div>

        <a href= "#/cart">Cart</a>
        <a href= "#/signUp">Sign Up</a>
        <a href= "#/signIn"> Sign In </a>
         

        <form>
          <input type="text" name="search" placeholder="Search.."></input>
        </form>


    </div>
</div>
 
);
}
}
export default Header

