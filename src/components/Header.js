import React from "react";

import Link from "./Link";

import "./Header.css";

export default function Header() {
	return (
		<header className="Header">
			<div className="Header-inner">
				<h1 className="Header-title">
					<Link className="Header-title-link" to="/">lpg.space</Link>
				</h1>

				<nav className="Header-nav">
					<Link className="Header-nav-item" to="/projects">Projects</Link>
					<Link className="Header-nav-item" to="/blog">Blog</Link>
					<Link className="Header-nav-item" to="/roblox-api">Roblox API</Link>
				</nav>
			</div>
		</header>
	);
}