import React from "react";

import Page from "./Page";

import megadump from "../../megadump.json";

import "./ApiClass.css";

export default function ApiClass({ match }) {
	const targetDumpClass = match.params.dumpClass;

	let foundClass = null;

	for (const dumpClass of megadump.Classes) {
		if (dumpClass.Name === targetDumpClass) {
			foundClass = dumpClass;
			break;
		}
	}

	if (foundClass == null) {
		return <h1>Class not found!</h1>;
	}

	const children = [];

	for (const member of foundClass.Members) {
		children.push(
			<div className="ApiClass-member" key={ member.Name }>
				<div className="ApiClass-member-name">{ member.Name }</div>
				<p className="ApiClass-member-description">{ member.Description }</p>
			</div>
		);
	}

	return (
		<Page title={ foundClass.Name } description="Roblox API Docs">
			<h1 className="ApiClass-title">
				{ foundClass.Name }
			</h1>
			{ children }
		</Page>
	);
}