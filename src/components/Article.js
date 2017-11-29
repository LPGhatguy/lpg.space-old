import React from "react";
import { Link } from "react-router-dom";

import "./Article.css";

const ArticleTitle = ({ inline, id, children }) => {
	return (
		<div className="Article-title">
			{ inline
				?
					<Link className="Article-titleInner" to={`/blog/${ id }`}>
						{ children }
					</Link>
				:
					<span className="Article-titleInner">
						{ children }
					</span>
			}
		</div>
	);
};

const Article = ({ post, inline }) => (
	<article className="Article">
		<header className="Article-header">
			<ArticleTitle id={ post.id } inline={ inline }>
				{ post.title }
			</ArticleTitle>
			<div className="Article-date">
				{ post.date.join("-") }
			</div>
		</header>

		<div className="Article-body">
			{ post.body() }
		</div>
	</article>
);

export default Article;