import React from "react";
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import { atomOneLight } from "react-syntax-highlighter/dist/styles";

import javascript from "react-syntax-highlighter/dist/languages/javascript";
import lua from "react-syntax-highlighter/dist/languages/lua";
import rust from "react-syntax-highlighter/dist/languages/rust";

import "./Code.css";

registerLanguage("javascript", javascript);
registerLanguage("lua", lua);
registerLanguage("rust", rust);

const code = (str) => {
	const indentation = str[0].match(/^\n(\s*)/)[1];
	const indentRegex = new RegExp(`\n${ indentation }`, "g");

	console.log(indentRegex);

	return str.map((piece, index) => {
		piece = piece.replace(indentRegex, "\n");

		if (index === 0) {
			piece = piece.replace(/^\n+/, "");
		}

		if (index === str.length - 1) {
			piece = piece.replace(/\s+$/, "");
		}

		return piece;
	});
};

export { code };

const Code = ({ language, children }) => (
	<div className="Code">
		<SyntaxHighlighter language={ language } style={ atomOneLight }>
			{ children }
		</SyntaxHighlighter>
	</div>
);

export default Code;