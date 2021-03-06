import React, { Component } from 'react';
import firebase from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

class Register extends Component {
	constructor(props) {
        super(props);
        this.state = {
          //fname: '',
          //lname: '',
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
        const user = {
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email
        }
        
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then( 
			function() {
				var newPostRef = userRef.push(user);
				//this.props.history.push('/profile');

				var CurUser = firebase.auth().currentUser;
				var fullname = user.fname + " " + user.lname;
				CurUser.updateProfile({
				  displayName: fullname
				  }).then(function() {
				  console.log("register - success");
				  console.log("register - " + CurUser.displayName);
				  window.location = "/#/profile";
				}).catch(function(error) {
				  var errorMessage = error.message;
  				  console.log(errorMessage);
				});


				
			
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
             <h2 className="form-signin-heading">Registration</h2>
             <label htmlFor="fname">First Name: </label>
             <input type="text" id="fname" className="form-control" name="fname" placeholder="First Name"   onChange={this.handleChange} value={this.state.fname} />
             <label htmlFor="lname">Last Name: </label>
             <input type="text" id="lname" className="form-control" name="lname" placeholder="Last Name"  onChange={this.handleChange} value={this.state.lname}/>
 
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
export default Register;