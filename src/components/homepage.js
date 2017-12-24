import React, { Component} from 'react';
import {Link} from 'react-router';


class Homepage extends React.Component{
render(){
return(
<div className = 'homepage'>
   <div className= "vertical-menu">
     <a href ="#/products" className="active"> PRODUCTS</a>
     <a href ="#"> WOMEN CLOTHING</a>
     <a href="#"> MEN CLOTHING </a>
     <a href="#"> SHOES</a>
     <a href="#"> CHARITIES</a>
     <a href="#"> OTHER</a>
   </div>
   <div className="bg">
        <img src="https://www.kcfilmfest.org/wp-content/uploads/2017/03/donations.jpg" width="100%" ></img>
    </div>
    
</div>
    );
   }
}


export default Homepage;
