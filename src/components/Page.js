import React from "react";

import "./Page.css";

const Page = ({ children, className }) => (
	<main className={ "Page " + (className || "") }>
		<div className="Page-inner">
			{ children }
		</div>
	</main>
);

export default Page;