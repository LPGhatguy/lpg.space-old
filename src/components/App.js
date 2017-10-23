import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import SupportBanner from "./SupportBanner";
import Code, { code } from "./Code";

import "./App.css";

const Home = () => (
	<div className="Home">
		<Code language="javascript">
			{code`
				function hello() {
					console.log("Hello, world!");
				}
			`}
		</Code>

		<Code language="rust">
			{code`
				fn hello() {
					println!("Hello, world!");
				}
			`}
		</Code>

		<Code language="lua">
			{code`
				local function hello()
					print("Hello, world!")
				end
			`}
		</Code>
	</div>
);

const About = () => (
	<div className="About">
		About!
	</div>
);

const App = () => (
	<div className="App">
		<SupportBanner />
		<Header />

		<Route exact path="/" component={ Home } />
		<Route exact path="/about" component={ About } />
	</div>
);

export default App;