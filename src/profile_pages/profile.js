import React, { Component } from 'react';
import Entry from '../entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';
import '../App.css';

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
        <MuiThemeProvider>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />

        
          <div className="fl-left margin-2rem">
            <Paper>
              <Menu
                selectedMenuItemStyle={ {backgroundColor: '#ccc', color: '#000'} }
                value={this.state.selectedItem}
                value='5'
              >
                <MenuItem primaryText="Inbox" value='1'/>
                <MenuItem primaryText="Order History" value='2'/>
                <MenuItem primaryText="Sales History" value='3'/>
                <MenuItem primaryText="Donations" value='4'/>
                <MenuItem primaryText="Profile" value='5'/>
                <MenuItem primaryText="Settings" value='6'/>
                <MenuItem primaryText="Log out" value='7' containerElement={<Link to="../Checkout" />} />
              </Menu>
            </Paper>
          </div>
          
          <div>
            <Paper id="profile_info" className="margin-2rem padding-2rem flow-root">
              <h3>My profile</h3>
              <h4 className="margin-b-5rem">Account Info</h4>
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