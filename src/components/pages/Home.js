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
	<Page className="Home" title="Home">
		<div className="Home-intro">
			<Code language="rust">
				{ code`
					fn main() {
						println!("Hello, world!");
					}
				` }
			</Code>
		</div>

		<div className="Home-identities">
			<Identity title="GitHub" name="LPGhatguy" link="https://github.com/LPGhatguy" />
			<Identity title="Twitter" name="@LPGhatguy" link="https://twitter.com/LPGhatguy" />
			<Identity title="IRC" name="lpg" />
			<Identity title="Snarky Blog" name="Horrible Software" link="http://horriblesoftware.com" />
		</div>
	</Page>
);

export default Home;