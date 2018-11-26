import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./base.css";

import App from "./components/App";


const app = document.querySelector("#app");

const element = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

if (process.env.NODE_ENV === "production") {
	hydrate(element, app);
} else {
	render(element, app);
}