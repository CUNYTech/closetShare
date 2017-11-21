import React, { Component } from 'react';
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