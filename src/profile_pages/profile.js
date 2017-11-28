import React, { Component } from 'react';
import Entry from '../entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';

// Material-ui theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navBar';

// Material-ui for Card
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Material-ui for Menu items  
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// try to put Dialog later
const styles = {
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  componentDidMount() {
    this.grabData()
    auth.onAuthStateChanged((user) => {
      if (user) {this.setState({ user});
      //console.log(user.displayName)
    } 
      else{
        console.log('No user is signed in.');
      }
    });
    
    //var fullName: '${this.state.fname} ${this.state.lname}';
    
  }

grabData = () => {
  const productsRef = firebase.database().ref('users');
    productsRef.on('value', (snapshot) => {
      var _this = this;
      snapshot.forEach(function(childsnap){
      //console.log('child snap',childsnap.val().fname)
      _this.setState({
        fname: childsnap.val().fname,
        email: childsnap.val().email
      })
     })
    });
}

  render() {
    console.log(this.state.fname);
    return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />

        <MuiThemeProvider>
          <div>
            <Paper style={styles}>
              <Menu>
                <MenuItem primaryText="My Profile" />
                <MenuItem primaryText="Orders" />
                <MenuItem primaryText="Donate History" />
                <MenuItem primaryText="Payment method" />
              </Menu>
            </Paper>
          </div>
          
          <div>
            <Paper style={styles} zDepth={1}>
              <h3>My profile</h3>
              <h4>Account Info</h4>
              <p>Name: {this.state.fname}</p>
              <p>E-mail: {this.state.email}</p>
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Profile;