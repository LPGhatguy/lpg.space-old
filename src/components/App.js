import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./NotFound";
import ApiIndex from "./ApiIndex";
import ApiClass from "./ApiClass";

export default function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/projects" component={ Projects } />
				<Route path="/roblox-api/:dumpClass" component={ ApiClass } />
				<Route exact path="/roblox-api" component={ ApiIndex } />
				<Route component={ NotFound } />
			</Switch>
		</div>
	);
}