import "ignore-styles";

import { readFileSync } from "fs";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Koa from "koa";
import koaStatic from "koa-static";
import koaMount from "koa-mount";

import App from "./App";

let renderPage;
if (process.env.NODE_ENV === "production") {
	const source = readFileSync("index.html", "utf8");

	renderPage = (content) => source
		.replace(`<div id="root"></div>`, `<div id="root">${ content }</div>`);
} else {
	renderPage = (content) => `
		<!doctype html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
				<meta name="theme-color" content="#000000">
				<link rel="shortcut icon" href="/favicon.ico">
				<title>lpg</title>
			</head>
			<body>
				<div id="root">${ content }</div>
				<script src="http://localhost:3000/static/js/bundle.js"></script>
			</body>
		</html>
	`;
}

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

server.listen(4000);