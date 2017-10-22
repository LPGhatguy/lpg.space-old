"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

process.on("unhandledRejection", err => {
	throw err;
});

const babel = require("babel-core");
const glob = require("glob");
const fs = require("fs-extra");
const chokidar = require("chokidar");

const clear = () => process.stdout.write("\x1Bc");

const transformName = name => name.replace(/^src/, "dev");

const compileFile = fileName => {
	return new Promise((resolve, reject) => {
		babel.transformFile(fileName, (err, result) => {
			if (err) {
				reject(new Error("Failed: " + err.message));
			}

			const outName = transformName(fileName);

			const promise = fs.ensureFile(outName)
				.then(() => fs.writeFile(outName, result.code));

			resolve(promise);
		});
	});
};

const compileDirectory = dirName => {
	return new Promise((resolve, reject) => {
		glob(dirName + "/**/*.js", (err, fileNames) => {
			if (err) {
				reject(err);
			}

			const promises = [];

			for (const fileName of fileNames) {
				const promise = compileFile(fileName)
					.then(() => fileName);

				promises.push(promise);
			}

			const promise = Promise.all(promises)
				.then((values) => {
					watch();

					return values;
				})
				.catch(err => {
					throw err;
				});

			resolve(promise);
		});
	});
};

const watch = () => {
	const watcher = chokidar.watch("src", {
		ignoreInitial: true,
		alwaysStat: true,
	});

	watcher.on("change", (fileName, stats) => {
		if (!fileName.match(/\.js$/)) {
			return;
		}

		if (stats.isFile()) {
			compileFile(fileName)
				.then(() => {
					clear();
					console.log(`Compiled ${ fileName }`);
				})
				.catch(err => {
					console.error("Compilation failed:", err);
				});
		} else {
			compileDirectory(fileName)
				.then((files) => {
					clear();
					console.log(`Compiled ${ files.join(",") }`);
				})
				.catch(err => {
					console.error("Compilation failed:", err);
				});
		}
	});
};

console.log("Compiling...");

compileDirectory("src")
	.then(files => {
		clear();
		console.log(`Compiled: ${ files.join("\n\t") }`);
		console.log("Watching for changes...");
	})
	.catch(err => {
		console.error("Compilation failed:", err);
	});