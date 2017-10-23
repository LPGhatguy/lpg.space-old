import React from "react";

import "./Page.css";

const Page = ({ children }) => (
	<div className="Page">
		<div className="Page-inner">
			{ children }
		</div>
	</div>
);

export default Page;