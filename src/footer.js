import React from 'react';
import Entry from './entry';
import './footer.css';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
		<ul>
			<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
			<li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
			<li><a href="#"><i className="fa fa-snapchat-square"></i></a></li>
			<li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
			<li><a href="#"><i className="fa fa-github-square"></i></a></li>
		</ul>
		<p>Closet Share @2017 Cuny Codes</p>
	</footer>
  );
};


export default Footer;
