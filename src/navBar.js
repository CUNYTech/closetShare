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
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem>React</MenuItem>
            <MenuItem>Redux</MenuItem>
            <MenuItem>React Router</MenuItem>
            <MenuItem>Material UI</MenuItem>
            <MenuItem>Electron</MenuItem>
            {this.state.user ?
              <div>
                <Link to="/profile">
                  <div className='user-profile'>
                    <img src={this.state.user.photoURL} alt='bad' />
                  </div>
                </Link>
              </div>
              :
              <div>
              </div>
            }
          </Drawer>
          <AppBar
            title="React Study"
            onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          />
        </div>


      </MuiThemeProvider>
    );
  }
}

export default NavBar;