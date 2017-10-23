import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import SupportBanner from "./SupportBanner";

const Home = () => (
	<div className="Home">
		Home!?
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