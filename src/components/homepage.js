import React, { Component} from 'react';
import {Link} from 'react-router';


class Homepage extends React.Component{
render(){
return(
 <div className = 'homepage'>
   <div className="jumbotron">
     <div className="container text-center">
        <h4>WELCOME TO CLOSETSHARE</h4> 
     <span className="glyphicon glyphicon-love"></span>
        <p1>When You Give, You Receive</p1>
	<form className="form-inline">
   	<div className="input-group">
      	  <input type="email" className="form-control" size="50" placeholder="Email Address" required></input>
      	<div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button></div>
    </div>
    </form>
     </div>
     </div>
 
<div className="container-fluid text-center">
  	<li><a href="#"><h4>PRODUCTS</h4></a></li>
  	<br/>
  <div className="row">
    	<div className="col-sm-4">
     	 <li><a href="#"><h4>MEN CLOTHING</h4></a></li>
    	</div>
    	<div className="col-sm-4">
      	 <li><a href= "#"><h4>WOMEN CLOTHING</h4></a></li>
    	</div>
    	<div className="col-sm-4">
      	 <li><a href= "#"><h4>SHOES</h4></a></li>
    	</div>
  </div>
  <br/><br/>
  <div className="row">
    	<div className="col-sm-4">
          <li><a href="#"><h4>BRANDS</h4></a></li>
        </div>
    	<div className="col-sm-4">
          <li><a href="#"><h4>CHARITIES</h4></a></li>
        </div>
        <div className="col-sm-4">
          <li><a href="#"><h4>OTHER</h4></a></li>
        </div>
   </div>
</div>





</div>




     

    
     );
   }
}


export default Homepage;
