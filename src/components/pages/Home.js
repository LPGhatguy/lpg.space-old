import React from "react";

import Page from "../Page";
import Code, { code } from "../Code";

import "./Home.css";

const Identity = ({ title, name, link }) => {
	const Tag = (link == null) ? "div" : "a";

	return (
		<Tag className="Home-identity" href={ link }>
			<div className="Home-identityTitle">{ title }</div>
			<div className="Home-identityName">{ name }</div>
		</Tag>
	);
};

const Home = () => (
	<Page className="Home">
		<div className="Home-identities">
			<Identity title="GitHub" name="LPGhatguy" link="https://github.com/LPGhatguy" />
			<Identity title="Twitter" name="@LPGhatguy" link="https://twitter.com/LPGhatguy" />
			<Identity title="IRC" name="lpg / lpghatguy" />
			<Identity title="Snark" name="Horrible Software" link="http://horriblesoftware.com" />
		</div>

		<Code language="rust">
			{code`
				fn hello() {
					println!("Hello, world!");
				}
			`}
		</Code>
	</Page>
);

export default Home;