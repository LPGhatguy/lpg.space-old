import React from "react";

import Page from "./Page";
import Link from "./Link";

import megadump from "../../megadump.json";

import "./ApiIndex.css";

export default function ApiIndex(props) {
	const children = [];

	for (const dumpClass of megadump.Classes) {
		children.push(
			<div className="ApiIndex-class" key={ dumpClass.Name }>
				<Link to={ `/roblox-api/${ dumpClass.Name }` }>{ dumpClass.Name }</Link>
			</div>
		);
	}

	return (
		<Page title="API Index" description="Roblox API Index">
			{ children }
		</Page>
	);
}