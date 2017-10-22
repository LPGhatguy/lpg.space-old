"use strict";

const PRESERVE = [
	".gitignore",
	".git",
	"README.md",
	"process.yml",
];

const { execSync } = require("child_process");
const { readFileSync, writeFileSync, removeSync } = require("fs-extra");
const glob = require("glob");

console.log("Updating 'deploy' from upstream...");
process.chdir("deploy");
execSync("git pull");
process.chdir("..");

console.log("Cleaning existing 'deploy' directory...");
const files = glob.sync(`deploy/!(${ PRESERVE.join("|") })`);

for (const file of files) {
	removeSync(file);
}

console.log("Building client...");
execSync("npm run build");

console.log("Building server...");
execSync("npm run build-server");

console.log("Copying static files to deployment...");
execSync("cp -r build/* deploy");

console.log("Generating package.json...");
const pack = JSON.parse(readFileSync("package.json"));
pack.scripts = {
	start: "node server.js",
};

writeFileSync("deploy/package.json", JSON.stringify(pack, null, 2));

console.log("Creating commit...");
process.chdir("deploy");
execSync("git add .");
execSync(`git commit -m "Automated deployment"`);

console.log("Pushing to deployment repository...");
execSync("git push");

console.log("Done!");