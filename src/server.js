import "ignore-styles";

import { readFileSync } from "fs";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Koa from "koa";
import koaStatic from "koa-static";
import koaMount from "koa-mount";

import App from "./components/App";

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

if (NODE_ENV !== "production") {
	throw new Error("NODE_ENV has gotta be production, friend.");
}

if (!PORT) {
	throw new Error("Please define PORT!");
}

const source = readFileSync("index.html", "utf8");

const renderPage = (content) => source
	.replace(`<div id="root"></div>`, `<div id="root">${ content }</div>`);

const server = new Koa();

server.use(koaMount("/static", koaStatic("static")));

server.use(ctx => {
	const context = {};
	const page = (
		<StaticRouter location={ ctx.request.url } context={ context }>
			<App />
		</StaticRouter>
	);

	const result = renderPage(renderToString(page));

	if (context.status) {
		ctx.response.status = context.status;
	} else {
		ctx.response.status = 200;
	}

	ctx.body = result;
});

server.listen(PORT, (err) => {
	if (err) {
		throw err;
	}

	console.log(`Listening on port ${ PORT }`);
});