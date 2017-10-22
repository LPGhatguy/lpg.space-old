import "ignore-styles";

import { readFileSync } from "fs";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Koa from "koa";
import koaStatic from "koa-static";
import koaMount from "koa-mount";

import App from "./App";
if (process.env.NODE_ENV !== "production") {
	throw new Error("This doesn't work outside production, friend.");
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
	ctx.body = result;
});

server.listen(80);