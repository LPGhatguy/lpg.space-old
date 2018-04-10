import React from "react";
import {
	Wysiwyg,
	P,
	A,
	Italic,
} from "../wysiwyg";

export default {
	date: [2017, 12, 21],
	title: "Rust C Compiler",
	description: "I created a bare-bones C compiler in Rust following Nora Sandler's Write a C Compiler Tutorial.",
	id: "rust-c-compiler",
	body: () => (
		<Wysiwyg>
			<P>
				During my winter vacation, I decided to start following along
				with <A href="https://norasandler.com/2017/11/29/Write-a-Compiler.html">
					Nora Sandler's Write a C Compiler
				</A>.
			</P>

			<P>
				I've been interested in compilers for a long time, but besides
				making small esolangs and partial parsers for existing scripting
				languages, I've never sat down to build a compiler for a real
				language end-to-end.
			</P>

			<P>
				I think Rust is a great language to author a compiler in, and
				it's great practice for developing my intuition with the
				platform too!
			</P>

			<P>
				You can check out my progress so far, currently up to the end of
				part one, <A href="https://github.com/LPGhatguy/rust-c-compiler">on GitHub</A>.
			</P>

			<P>
				Since the repository won't ever be a <Italic>useful</Italic> project,
				it exists solely as reference code, whether for other
				people following along with the series or just for those curious
				about Rust or compilers.
			</P>
		</Wysiwyg>
	),
};