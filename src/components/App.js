import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import SupportBanner from "./SupportBanner";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import "./App.css";

const App = () => (
	<div className="App">
		<SupportBanner />
		<Header />

		<Switch>
			<Route exact path="/" component={ Home } />
			<Route path="/projects" component={ Projects } />
			<Route path="/blog/:id">
				{ ({ match }) => <BlogPost id={ match.params.id } /> }
			</Route>
			<Route path="/blog" component={ Blog } />
			<Route component={ NotFound } />
		</Switch>
	</div>
);

export default App;