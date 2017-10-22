import React from "react";
import { Link, Route } from "react-router-dom";

const Home = () => (
	<div className="Home">
		Home!?
	</div>
);

const About = () => (
	<div className="About">
		About!
	</div>
);

export default () => (
	<div className="App">
		hey

		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>

		<Route exact path="/" component={ Home } />
		<Route exact path="/about" component={ About } />
	</div>
);