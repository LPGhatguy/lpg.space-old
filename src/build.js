import "ignore-styles";

import { readFileSync } from "fs";

import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import App from "./components/App";
import { NavProvider } from "./components/navigation";

const source = readFileSync("index.html", "utf8");

const headInfoPattern = /<head-info\s*\/>/;

function compositePage(content, title, description) {
	return source
		.replace(headInfoPattern, `<title>${ title }</title><meta name="description" content="${ description }" />`)
		.replace(`<div id="root"></div>`, `<div id="root">${ content }</div>`);
}

function renderPage(url, navContext) {
	const routerContext = {};
	const page = (
		<StaticRouter location={ url } context={ routerContext }>
			<NavProvider value={ navContext }>
				<App />
			</NavProvider>
		</StaticRouter>
	);

	const content = renderToString(page);
	const title = routerContext.title || "lpg";
	const description = routerContext.description || "Personal website of Lucien Greathouse";

	return compositePage(content, title, description);
}

function renderAllPages() {
	const visitedUrls = new Set();
	const urlsToVisit = new Set(["/"]);
	const rendered = new Map();

	while (true) {
		const url = urlsToVisit.pop();

		if (url == null) {
			break;
		}

		visitedUrls.add(url);

		const navContext = {
			toVisit: [],
		};
		const contents = renderPage(url, navContext);
		rendered.insert(url, contents);

		for (const url of navContext.toVisit) {
			if (!visitedUrls.has(url) && !urlsToVisit.has(url)) {
				urlsToVisit.add(url);
			}
		}
	}

	return rendered;
}

console.log(renderAllPages());