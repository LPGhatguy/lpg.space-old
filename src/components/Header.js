import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const NavItem = ({ to, children, exact }) => (
	<NavLink className="Header-navItem" activeClassName="Header-navItem--active" exact={ exact } to={ to }>
		{ children }
	</NavLink>
);

const Header = () => (
	<header className="Header">
		<div className="Header-inner">
			<h1 className="Header-title">lpg</h1>
			<nav className="Header-nav">
				<NavItem exact to="/">Home</NavItem>
				<NavItem to="/projects">Projects</NavItem>
				<a className="Header-navItem" href="http://horriblesoftware.com">Blog</a>
			</nav>
		</div>
	</header>
);

export default Header;