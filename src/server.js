import "ignore-styles";

import { readFileSync } from "fs";
import { execSync } from "child_process";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Koa from "koa";
import koaStatic from "koa-static";
import koaMount from "koa-mount";

import App from "./components/App";

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const DEPLOY_KEY = process.env.DEPLOY_KEY;

if (NODE_ENV !== "production") {
	throw new Error("NODE_ENV has gotta be production, friend.");
}

if (!PORT) {
	throw new Error("Please define PORT!");
}

if (!DEPLOY_KEY) {
	throw new Error("Please define DEPLOY_KEY!");
}

const source = readFileSync("index.html", "utf8");

const headInfoPattern = /<head-info\s*\/>/;

const renderPage = (content, title, description) => source
	.replace(headInfoPattern, `<title>${ title }</title><meta name="description" content="${ description }" />`)
	.replace(`<div id="root"></div>`, `<div id="root">${ content }</div>`);

const takeBeforeQuestionMark = content => {
	let position = content.indexOf("?");

	if (position === -1) {
		return content;
	}

	return content.slice(0, position);
};

const server = new Koa();
const cache = new Map();

server.use(koaMount("/static", koaStatic("static")));

server.use(ctx => {
	const url = takeBeforeQuestionMark(ctx.request.url);

	if (url === `/deploy/${ DEPLOY_KEY }`) {
		setTimeout(() => {
			execSync("git pull");
			execSync("npm install");
			process.exit(0);
		}, 200);

		ctx.response.status = 200;
		ctx.body = "Got it!";

		return;
	}

	if (ctx.request.method === "GET" && cache.has(url)) {
		ctx.response.status = 200;
		ctx.body = cache.get(url);

		return;
	}

	const context = {};
	const page = (
		<StaticRouter location={ url } context={ context }>
			<App />
		</StaticRouter>
	);

	const content = renderToString(page);
	const title = context.title || "lpg";
	const description = context.description || "Personal website of Lucien Greathouse";

	const result = renderPage(content, title, description);

	if (context.status) {
		ctx.response.status = context.status;
	} else {
		ctx.response.status = 200;
	}

	if (ctx.request.method === "GET" && ctx.response.status === 200) {
		cache.set(url, result);
	}

	ctx.body = result;
});

server.listen(PORT, (err) => {
	if (err) {
		throw err;
	}

	console.log(`Listening on port ${ PORT }`);
});