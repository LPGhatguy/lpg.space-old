import React from "react";

import Page from "../Page";

import "./Projects.css";

const Tags = {
	rust: {
		className: "rust",
		label: "Rust",
	},
	lua: {
		className: "lua",
		label: "Lua",
	},
	js: {
		className: "js",
		label: "JS",
	},
};

const ProjectLink = ({ to, children }) => (
	<a className="Project-link" href={ to }>
		{ children }
	</a>
);

const Project = ({ name, description, children, tags }) => {
	const tagCards = [];

	if (tags) {
		for (const tag of tags) {
			const tagDetails = Tags[tag];

			tagCards.push(
				<div key={ tag } className={`Project-tag Project-tag--${ tagDetails.className }`}>
					{ tagDetails.label }
				</div>
			);
		}
	}

	return (
		<li className="Project">
			<div className="Project-header">
				<div className="Project-title">{ name }</div>
				<div className="Project-tags">
					{ tagCards }
				</div>
			</div>
			<div className="Project-body">
				<div className="Project-description">{ description }</div>
				<div className="Project-children">{ children }</div>
			</div>
		</li>
	);
};

const Projects = () => (
	<Page className="Projects" title="Projects">
		<h1 className="Page-title">Projects</h1>

		<p className="Page-paragraph">
			Open source is incredibly important to me. Most of the things I
			spend my personal time working on end up open source in some form or
			another.
		</p>

		<h2 className="Page-subtitle">Interesting Personal Projects (Current)</h2>

		<ul className="Projects-list">
			<Project name="Mab" description="Lossless Lua 5.1+ parser in Rust" tags={["rust"]}>
				<ProjectLink to="https://github.com/LPGhatguy/lua-parser">GitHub</ProjectLink>
			</Project>

			<Project name="Rojo" description="Enables external editors and version control for Roblox projects" tags={["rust", "lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/rojo">GitHub</ProjectLink>
			</Project>

			<Project name="Baste" description="An alternative module system for Lua" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/baste">GitHub</ProjectLink>
			</Project>

			<Project name="Lemur" description="Roblox API emulation targeted at CI systems" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/lemur">GitHub</ProjectLink>
			</Project>
		</ul>

		<h2 className="Page-subtitle">Interesting Personal Projects (Older)</h2>

		<ul className="Projects-list">
			<Project name="fhtagn" description="Satirical platform for writing games entirely in regular expressions" tags={["js"]}>
				<ProjectLink to="https://github.com/LPGhatguy/fhtagn">GitHub</ProjectLink>
			</Project>

			<Project name="FFI++" description="Proof-of-concept C++ FFI for LuaJIT" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/luajit-ffipp">GitHub</ProjectLink>
			</Project>

			<Project name="love-microphone" description="Microphone and streaming audio implementation for LÖVE 0.10.x" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/love-microphone">GitHub</ProjectLink>
			</Project>

			<Project name="RBXFS" description="Tool for building Roblox places from the filesystem. Replaced by Rojo!" tags={["js"]}>
				<ProjectLink to="https://github.com/LPGhatguy/rbxfs">GitHub</ProjectLink>
			</Project>

			<Project name="rbxpacker" description="Creates interactive installers for Roblox libraries" tags={["rust"]}>
				<ProjectLink to="https://github.com/LPGhatguy/rbxpacker">GitHub</ProjectLink>
			</Project>

			<Project name="Textbox" description="Textbox input controls for LÖVE" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/textbox">GitHub</ProjectLink>
			</Project>

			<Project name="luajit-request" description="Wraps cURL to provide an easy-to-use HTTPS interface for LuaJIT" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/luajit-request">GitHub</ProjectLink>
			</Project>

			<Project name="global-keys" description="An API for system-wide hotkeys in Windows for LÖVE" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/global-keys">GitHub</ProjectLink>
			</Project>
		</ul>

		<h2 className="Page-subtitle">Open Source at Roblox (2017 - current)</h2>

		<ul className="Projects-list">
			<Project name="Rodux" description="Redux analog for Roblox Lua" tags={["lua"]}>
				<ProjectLink to="https://github.com/Roblox/rodux">GitHub</ProjectLink>
			</Project>

			<Project name="Roact" description="React analog for Roblox UI in Lua" tags={["lua"]}>
				<ProjectLink to="https://github.com/Roblox/roact">GitHub</ProjectLink>
			</Project>

			<Project name="TestEZ" description="BDD-style testing framework for Roblox Lua" tags={["lua"]}>
				<ProjectLink to="https://github.com/Roblox/testez">GitHub</ProjectLink>
			</Project>

			<Project name="Luanoid" description="Reimplementation of Roblox's character controller in pure Lua" tags={["lua"]}>
				<ProjectLink to="https://github.com/LPGhatguy/luanoid">GitHub</ProjectLink>
			</Project>
		</ul>

		<h2 className="Page-subtitle">Open Source at Gecko Designs (2015 - 2017)</h2>

		<ul className="Projects-list">
			<Project name="guh" description="Custom project generator and build system" tags={["js"]}>
				<ProjectLink to="https://github.com/LPGhatguy/guh">GitHub</ProjectLink>
			</Project>

			<Project name="ekma" description="ES2015 template string based templating API" tags={["js"]}>
				<ProjectLink to="https://github.com/LPGhatguy/ekma">GitHub</ProjectLink>
			</Project>
		</ul>
	</Page>
);

export default Projects;