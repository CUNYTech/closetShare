import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import './App.css';
import Entry from './entry';
import firebase, { auth, provider } from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter, Router} from 'react-router-dom';



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
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem>HOME</MenuItem>
            <MenuItem>PRODUCTS
            </MenuItem>
            <MenuItem>WOMEN CLOTHING</MenuItem>
            <MenuItem>MEN CLOTHING</MenuItem>
            <MenuItem>SHOES</MenuItem>
            <MenuItem>KIDS</MenuItem>
            <MenuItem>BRANDS</MenuItem>
            <MenuItem>CHARITIES</MenuItem>
            <MenuItem>OTHER</MenuItem>
          </Drawer>
          <AppBar
            title="Closet Share"
            onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          />
        </div>


      </MuiThemeProvider>
    );
  }
}

export default NavBar;