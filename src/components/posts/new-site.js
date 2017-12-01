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
				I had been exceedingly frustrated waiting for GitHub Pages to
				support TLS for custom domains. Having a nice CDN with very
				little setup is nice, but HTTPS is becoming more and more of a
				hard requirement.
			</P>

			<P>
				All-in-all, I'm impressed with the server-side performance of
				React 16, and having zero-latency page transitions is rad.
			</P>

			<P>
				The development experience using React and my own templates is
				also significantly better than Jekyll. I gain hot-reloading and
				a lot of flexibility in how I construct my pages.
			</P>

			<P>
				The price I pay for this is much more setup and maintenance, as
				well as hosting costs. I'm confident; we'll see if it pays off.
			</P>
		</Wysiwyg>
	),
};