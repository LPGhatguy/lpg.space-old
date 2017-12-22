import newSite from "./new-site";
import rustCCompiler from "./rust-c-compiler";

const posts = [
	newSite,
	rustCCompiler,
];

const postsById = {};

for (const post of posts) {
	postsById[post.id] = post;
}

export default posts;
export { postsById };