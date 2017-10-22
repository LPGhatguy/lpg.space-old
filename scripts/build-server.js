"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const babel = require("babel-core");
const glob = require("glob");
const fs = require("fs-extra");

process.on("unhandledRejection", err => {
	throw err;
});

const transformName = name => name.replace(/^src/, "build");

const compileFile = fileName => {
	return new Promise((resolve, reject) => {
		babel.transformFile(fileName, (err, result) => {
			if (err) {
				reject(new Error("Failed: " + err.message));
			}

			const outName = transformName(fileName);

			const promise = fs.ensureFile(outName)
				.then(() => fs.writeFile(outName, result.code))
				.then(() => {
					console.log("transpiled:", fileName, outName);
				});

			resolve(promise);
		});
	});
};

glob("src/**/*.js", (err, fileNames) => {
	if (err) {
		throw new Error("Failed: " + err.message);
	}

	for (const fileName of fileNames) {
		compileFile(fileName);
	}
});