import React from "react";

import Page from "../Page";
import Article from "../Article";
import posts from "../posts";

import "./Blog.css";

const compareNum = (a, b) => {
	if (a < b) {
		return 1;
	} else if (a > b) {
		return -1;
	}

	return 0;
};

const compareDate = (a, b) => {
	const year = compareNum(a[0], b[0]);
	const month = compareNum(a[1], b[1]);
	const day = compareNum(a[2], b[2]);

	if (year !== 0) {
		return year;
	}

	if (month !== 0) {
		return month;
	}

	return day;
};

const Blog = () => {
	const sortedPosts = posts
		.filter(post => !post.unlisted);

	sortedPosts.sort((a, b) => compareDate(a.date, b.date));

	return (
		<Page className="Blog" title="Blog">
			<div className="Blog-posts">
				{ sortedPosts.map((post) => (
					<Article key={ post.id } post={ post } inline={ true } />
				)) }
			</div>
		</Page>
	);
};

export default Blog;