import React from "react";

import { Link, NavLink } from "./navigation";
import "./Header.css";

const NavItem = ({ to, children, exact }) => (
	<NavLink className="Header-navItem" activeClassName="Header-navItem--active" exact={ exact } to={ to }>
		{ children }
		<div className="Header-navItem-underline" />
	</NavLink>
);

const Header = () => (
	<header className="Header">
		<div className="Header-inner">
			<h1 className="Header-title">
				<Link to="/">lpg</Link>
			</h1>
			<nav className="Header-nav">
				<NavItem to="/projects">Projects</NavItem>
				<NavItem to="/blog">Blog</NavItem>
			</nav>
		</div>
	</header>
);

export default Header;