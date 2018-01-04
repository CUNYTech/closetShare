import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import './App.css';
import firebase, { auth, provider } from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null // <-- add this line
    }    
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }
  login() {
  auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
      this.setState({ user });
      } 
    });
  }

  render() {
    return (

        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem containerElement={<Link to ="/" />}>Home</MenuItem>
            <MenuItem containerElement={<Link to ="/product" />}>Products</MenuItem>
            <MenuItem containerElement={<Link to ="/register" />}>Register</MenuItem>
            <MenuItem containerElement={<Link to ="/signin" />}>Signin</MenuItem>
            <MenuItem containerElement={<Link to ="/profile" />}>Profile</MenuItem>
            <MenuItem>Charities</MenuItem>
            <MenuItem containerElement={<Link to ="/checkout" />}>Checkout</MenuItem>
            <MenuItem>About Us</MenuItem>

          </Drawer>
          <AppBar
            title="Closet Share"
            onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          />
        </div>
    );
  }
}

export default NavBar;