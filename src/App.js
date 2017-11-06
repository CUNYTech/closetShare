import React, { Component } from 'react';
import './Site.css';
//import firebase from './firebase.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
 
class App extends Component {
 	render() {
	    return (
	    	<div className='app'>
				 <nav class="navbar navbar-default">
				   <div class="container-fluid">
				   <ul class="nav nav-tabs nav-justified">
				     <li> <a href="#">WOMEN</a></li>
				     <li> <a href="#">MEN</a></li>
				     <li> <a href="#">SHOES</a></li>
				     <li> <a href="#">KIDS</a></li>
				     <li> <a href="#">BRANDS</a></li>
				     <li> <a href="#">CHARITIES</a></li>
				   </ul>
				  </div>
				  
				  <div class="header">
				  <ul class="nav nav-tabs nav-justified">
				    <li><input type="text"  name="search" placeholder="Search here ...." class="glyphicon glyphicon-search" /></li>
				    <li>
				        <div class="dropdown">
				           <button class="dropbtn">MY ACCOUNT
				               <span class="caret"></span>
				           </button>
				           <div class="dropdown-content" id="myDropdown">
				               <a href="#">Inbox</a>
				               <a href="#">Order History</a>
				               <a href="#">Sales History</a>
				               <a href="#">Donations</a>
				               <a href="#">Profile</a>
				               <a href="#">Account Settings</a>
				               <a href="#">Log Out</a>
				           </div>
				        </div>
				    </li>
				    <li><a href="/register"><span class="glyphicon glyphicon-user"></span>Sign up</a></li>
				    {/*<li><Link to="/register"><span class="glyphicon glyphicon-user"></span>Sign up</Link></li>*/}
				    <li><a href="/signIn"><span class="glyphicon glyphicon-log-in"></span>Sign in</a></li>
				  </ul>

						{/*<Route path="/register" component={register}/>*/}

				  </div>
				  </nav>
				  <div class="container">
					   <br/>
					   <div id="myCarousel" class="carousel slide" data-ride="carousel">
					     {/* Indicators */}
					     <ol class="carousel-indicators">
					       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					       <li data-target="#myCarousel" data-slide-to="1"></li>
					       <li data-target="#myCarousel" data-slide-to="2"></li>
					       <li data-target="#myCarousel" data-slide-to="3"></li>
					     </ol>
					 
					     {/* Wrapper for slides */}
					     <div class="carousel-inner" role="listbox">
					 
					       <div class="item active">
					           <a href="https://www.stjude.org/give.html">
					             <img src="https://static.wixstatic.com/media/3bc938_e0a4c2fef46d46769328eaaf92089025~mv2.jpg" alt="St Jude's"/>
					           </a>
					           <div class="carousel-caption"></div>
					       </div>
					 
					       <div class="item">
					           <a href="https://www.volunteer.va.gov/apps/VolunteerNow/">
					             <img src= "http://www.midland.edu/images/for_students/studentservices/va/roundlogo.gif" alt="Veterans Affair"/ >
					           </a>
					           <div class="carousel-caption"></div>
					       </div>
					     
					       <div class="item">
					           <a href="https://www.cancer.org/involved/donate.html">
					             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/American_Cancer_Society_Logo.svg/1200px-American_Cancer_Society_Logo.svg.png"  alt="American Cancer Society" />
					           </a>
					           <div class="carousel-caption"></div>
					       </div>
					 
					       <div class="item">
					           <a href="https://www.unicefusa.org/donate/help-save-childrens-lives/29161">
					             <img src="https://shop.unicef.ca/sites/default/files/styles/share_fb/public/images/share/facebook/UNG4-1-tent.jpg?itok=yzIZEvkE" alt="UNICEF" />
					           </a>
					           <div class="carousel-caption"></div>
					       </div>
					    </div>
					 
					    { /* Left and right controls */}
					     <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
					       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					       <span class="sr-only">Previous</span>
					     </a>
					     <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
					       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					       <span class="sr-only">Next</span>
					     </a>
					   </div>
					 </div> 

	    	</div>	
	    	)
	}  
} 
 
   export default App;
  
  
  
 