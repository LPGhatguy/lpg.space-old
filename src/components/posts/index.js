import newSite from "./new-site";

const posts = [
	newSite,
];

const postsById = {};

for (const post of posts) {
	postsById[post.id] = post;
}

export default posts;
export { postsById };