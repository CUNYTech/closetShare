import React from 'react';
import Entry from './entry';
import './home.css';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
   
	<header>
		<h2><a href="#">Make a Logo</a></h2>
		<nav>
			<li><a href="#">Home</a></li>
			<li><a href="#">Products</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contacts</a></li>
		</nav>
	</header>


	<section className="hero">
		<div className="background-image"></div>
		<h1>Closet Share</h1>
		<h3>Charity Market Place</h3>
		<a href="" class="btn">Donate Here</a>
	</section>


	<section class="our-work">
		<h3 class="title">Some of our work</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
		<hr />

		<ul className="grid">
			<li className="small" ></li>
			<li className="large"></li>
			<li className="large"></li>
			<li className="small"></li>
		</ul>
	</section>
	

	<section className="features">
		<h3 className="title">Features and services</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
		<hr />

		<ul className="grid">
			<li>
				<i className="fa fa-camera-retro"></i>
				<h4>Photography</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
			<li>
				<i className="fa fa-cubes"></i>
				<h4>Web Development</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
			<li>
				<i className="fa fa-newspaper-o"></i>
				<h4>Content Editing</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
			</ul>
	</section>


	<section className="reviews">
		<h3 className="title">What others say:</h3>

		<p className="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
		<p className="author">— Patrick Farrell</p>

		<p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
		<p className="author">— George Smith</p>

		<p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.</p>
		<p className="author">— Kevin Blake</p>

		
	</section>


	<section className="contact">
		<h3 className="title">Join our newsletter</h3>	
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>

		<form>
			<input type="email" placeholder="Email" />
			<a href="#" className="btn">Subscribe now</a>
		</form>
	</section>
  </div>
  );
};


export default Home;
