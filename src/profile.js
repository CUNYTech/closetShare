import React, { Component } from 'react';
<<<<<<< HEAD
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';

// For material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navBar';

// For Card 
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// For Menu items  
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
    auth.onAuthStateChanged((user) => {
      if (user) {this.setState({ user });} 
      else{
        console.log('No user is signed in.');
      }
    });

    var user = firebase.auth().currentUser;
    var name, email, photoUrl;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
   }
  }

  render() {
    console.log(this.state.user);
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
              <p id="name">Name: {this.state.name}</p>
              <p id="email">Aliquam tincidunt mauris eu risus.</p>
            </Paper>
            
            <Card>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Profile;
=======
import firebase from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

class Profile extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	name: 'Stranger',
          //fname: '',
          //lname: '',
          //email: '',
          result: ''
        }    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
	
    componentDidMount() {
    	var user = firebase.auth().currentUser;

    	if (user){
    		console.log("profile - " + user.displayName);
    		this.setState({
    			name: user.displayName});
		}
    }

	handleSubmit(e) {
		e.preventDefault();
		firebase.auth().signOut().then(function() {
  			window.location = "/#/";
			
			}).catch(function(error) {
  				var errorCode = error.code;
  				var errorMessage = error.message;
  				alert(errorMessage);
            	console.log(errorMessage);
  			});
	}


	render() {
	    return (<div>
	    	<h1>Hello {this.state.name}</h1>

	    	<button className="btn btn-lg btn-success btn-block" type="submit" onClick={this.handleSubmit}>Sign out</button>
	    	</div>
	    	)}


}

export default Profile;
>>>>>>> master
