import React from "react";

import Page from "../Page";
import Article from "../Article";
import NotFound from "./NotFound";
import { postsById } from "../posts";

import "./BlogPost.css";

const BlogPost = ({ id }) => {
	const post = postsById[id];

	if (!post) {
		return (
			<NotFound />
		);
	}

	return (
		<Page className="BlogPost">
			<Article post={ post } inline={ false } />
		</Page>
	);
};

export default BlogPost;