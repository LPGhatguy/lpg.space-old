import React from "react";

import "./Page.css";

const Page = ({ children, className }) => (
	<div className={ "Page " + (className || "") }>
		<div className="Page-inner">
			{ children }
		</div>
	</div>
);

export default Page;