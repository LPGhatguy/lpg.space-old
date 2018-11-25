import { readFileSync, writeFile, ensureDir } from "fs-extra";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import config from "./config";
import App from "./components/App";
import { RouterContext } from "./components/Router";

const baseHtml = readFileSync(path.join(__dirname, "index.html"), "utf8");
const buildStats = JSON.parse(readFileSync(path.join(__dirname, "../build-stats.json"), "utf8"));
const baseOutputDir = path.join(__dirname, "../prod");

let extraBodyTags = "";

for (const asset of buildStats.assets) {
	if (asset.name.endsWith(".css")) {
		extraBodyTags += `<link rel="stylesheet" href="/${ asset.name }" />\n`;
	} else if (asset.name.endsWith(".js")) {
		extraBodyTags += `<script type="text/javascript" src="/${ asset.name }"></script>\n`;
	}
}

function renderPage(url) {
	const linkContext = {
		seenUrls: [],
		pageTitle: null,
		pageDescription: null,
	};

	const element = (
		<RouterContext.Provider value={ linkContext }>
			<StaticRouter location={ url } context={{}}>
				<App />
			</StaticRouter>
		</RouterContext.Provider>
	);
	const body = renderToString(element);

	if (linkContext.pageTitle == null) {
		console.warn(`Page ${ url } is missing a title`);
		linkContext.pageTitle = config.defaultTitle;
	}

	if (linkContext.pageDescription == null) {
		linkContext.pageDescription = config.defaultDescription;
	}

	const pageContents = baseHtml
		.replace("{content}", body)
		.replace("{title}", linkContext.pageTitle)
		.replace("{description}", linkContext.pageDescription)
		.replace("</body>", `${ extraBodyTags }</body>`);

	return { pageContents, linkContext };
}

function crawl() {
	const urlsToVisit = ["/", "/404"];
	const seenUrls = new Set(urlsToVisit);
	const pages = new Map();

	while (urlsToVisit.length > 0) {
		const url = urlsToVisit.pop();

		const { pageContents, linkContext } = renderPage(url);

		for (const seenUrl of linkContext.seenUrls) {
			if (!seenUrls.has(seenUrl)) {
				seenUrls.add(seenUrl);
				urlsToVisit.push(seenUrl);
			}
		}

		pages.set(url, pageContents);
	}

	return pages
}

function isSingleFile(url) {
	return url === "/404";
}

async function crawlAndOutput() {
	const pages = crawl();

	for (const [url, contents] of pages) {
		let output = path.join(baseOutputDir, url);

		if (isSingleFile(url)) {
			output += ".html";
		} else {
			await ensureDir(output);
			output = path.join(output, "index.html");
		}

		await writeFile(output, contents);
	}
}

crawlAndOutput();