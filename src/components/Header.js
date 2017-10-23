import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
	<header className="Header">
		<div className="Header-inner">
			<h1 className="Header-title">lpg</h1>
			<nav className="Header-nav">
				<Link className="Header-navItem" to="/">Home</Link>
				<Link className="Header-navItem" to="/about">About</Link>
			</nav>
		</div>
	</header>
);

export default Header;