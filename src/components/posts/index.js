import newSite from "./new-site";
import rustCCompiler from "./rust-c-compiler";
import photoWithStanLee from "./photo-with-stan-lee";

const posts = [
	newSite,
	rustCCompiler,
	photoWithStanLee,
];

const postsById = {};

for (const post of posts) {
	postsById[post.id] = post;
}

export default posts;
export { postsById };