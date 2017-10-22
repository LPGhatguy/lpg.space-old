import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const page = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.hydrate(page, document.getElementById("root"));