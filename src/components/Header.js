import React from "react";

import Link from "./Link";

export default function Header() {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
			</nav>
		</header>
	);
}