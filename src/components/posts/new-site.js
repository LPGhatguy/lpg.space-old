import React from "react";
import {
	Wysiwyg,
	P,
	Ul,
	Li,
} from "../wysiwyg";

export default {
	date: [2017, 29, 11],
	title: "New site!",
	id: "new-site",
	body: () => (
		<Wysiwyg>
			<P>
				I built a fancy new site with some fun technology:

				<Ul>
					<Li>Node.js</Li>
					<Li>Nginx as a reverse proxy</Li>
					<Li>React server-side rendering</Li>
				</Ul>
			</P>

			<P>
				I'm impressed with the server-side performance of React 16, and
				having zero-latency page transitions is rad.
			</P>
		</Wysiwyg>
	),
};