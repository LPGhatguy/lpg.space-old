import React from "react";

import Page from "../Page";

import "./Projects.css";

const ProjectLink = ({ to, children }) => (
	<a className="Project-link" href={ to }>
		{ children }
	</a>
);

const Project = ({ name, description, children }) => (
	<li className="Project">
		<div className="Project-title">{ name }</div>
		<div className="Project-description">{ description }</div>
		<div className="Project-children">{ children }</div>
	</li>
);

const Projects = () => (
	<Page className="Projects">
		<h1 className="Page-title">Projects</h1>

		<ul className="Projects-list">
			<Project name="fhtagn" description="Platform for writing systems entirely in regular expressions">
				<ProjectLink to="https://github.com/LPGhatguy/fhtagn">GitHub</ProjectLink>
			</Project>

			<Project name="FFI++" description="Proof-of-concept C++ FFI for LuaJIT">
				<ProjectLink to="https://github.com/LPGhatguy/luajit-ffipp">GitHub</ProjectLink>
			</Project>

			<Project name="love-microphone" description="Microphone and streaming audio implementation for LÖVE 0.10.x">
				<ProjectLink to="https://github.com/LPGhatguy/love-microphone">GitHub</ProjectLink>
			</Project>

			<Project name="Baste" description="An alternative module system for Lua">
				<ProjectLink to="https://github.com/LPGhatguy/baste">GitHub</ProjectLink>
			</Project>

			<Project name="Lemur" description="Roblox API emulation targeted at CI systems">
				<ProjectLink to="https://github.com/LPGhatguy/lemur">GitHub</ProjectLink>
			</Project>

			<Project name="RBXFS" description="Tool for building Roblox places from the filesystem">
				<ProjectLink to="https://github.com/LPGhatguy/rbxfs">GitHub</ProjectLink>
			</Project>

			<Project name="luajit-request" description="Wraps cURL to provide an easy-to-use HTTPS interface for LuaJIT">
				<ProjectLink to="https://github.com/LPGhatguy/luajit-request">GitHub</ProjectLink>
			</Project>

			<Project name="global-keys" description="An API for system-wide hotkeys in Windows for LÖVE">
				<ProjectLink to="https://github.com/LPGhatguy/global-keys">GitHub</ProjectLink>
			</Project>
		</ul>
	</Page>
);

export default Projects;