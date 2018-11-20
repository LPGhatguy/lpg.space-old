import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./NotFound";

export default function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/projects" component={ Projects } />
				<Route component={ NotFound } />
			</Switch>
		</div>
	);
}