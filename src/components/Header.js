import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
	<header className="Header">
		<div className="Header-inner">
			<h1 className="Header-title">lpg</h1>
			<nav className="Header-nav">
				<div className="Header-navItem">
					<Link to="/">Home</Link>
				</div>
				<div className="Header-navItem">
					<Link to="/about">About</Link>
				</div>
			</nav>
		</div>
	</header>
);

export default Header;