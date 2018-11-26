import React from "react";

import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import rust from "highlight.js/lib/languages/rust";
import lua from "highlight.js/lib/languages/lua";

import "highlight.js/styles/github.css";
import "./Code.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("lua", lua);

export default function Code({ lang, children }) {
	return (
		<pre className="Code">
			<code dangerouslySetInnerHTML={{ __html: hljs.highlight(lang, children).value }} />
		</pre>
	);
}