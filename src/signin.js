import React, { Component } from 'react';
import firebase from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

class Signin extends Component {
	constructor(props) {
        super(props);
        this.state = {
          //email: '',
          result: ''
        }    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
	handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const userRef = firebase.database().ref('users');
        
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then( 
			function() {
				var curUser = firebase.auth().currentUser;
				//this.props.history.push('/profile');
				window.location = "/#/profile";
			
		}).catch(function(error) {
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			alert(errorMessage);
            console.log(errorMessage);
  		});

  		
  	}
	render() {
	    return (
	    	 <div className="container">
 
             <form className="form-signin" onSubmit={this.handleSubmit}>
             <h2 className="form-signin-heading">Sign In</h2>
             <label htmlFor="inputEmail">Email address:</label>
             <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Email address" onChange={this.handleChange} value={this.state.email}/>
 
             <label htmlFor="inputPassword">Password:</label>
             <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password"  onChange={this.handleChange} value={this.state.password}/>
             <div className="checkbox">
             </div>
             <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
         </form>
 
         </div>)
	}
}
export default Signin;