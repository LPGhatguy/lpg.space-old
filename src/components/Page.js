import React from "react";

import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import config from "../config";

export default function Page({ title, description, children }) {
	if (title == null) {
		title = config.defaultTitle;
	}

	if (description == null) {
		description = config.defaultDescription;
	}

	return (
		<div className="Page">
			<PageTitle value={ title } />
			<PageDescription value={ description } />
			{ children }
		</div>
	);
}