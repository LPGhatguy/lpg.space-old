import React from "react";

import Page from "./Page";
import Card from "./Card";
import Code from "./Code";

export default function Home() {
	return (
		<Page title="Home">
			<Card>Hello, world!</Card>
			<Code lang="lua">print("Hello, world!")</Code>
		</Page>
	);
}