import React from "react";

import "./Page.css";

const setTitle = title => {
	const titleElement = document.head.querySelector("title");

	if (title) {
		titleElement.innerText = "lpg | " + title;
	} else {
		titleElement.innerText = "lpg";
	}
};

class Page extends React.Component {
	componentDidMount() {
		if (this.props.staticContext) {
			this.props.staticContext.title = this.props.title;
		} else {
			setTitle(this.props.title);
		}
	}

	render() {
		const { className, children } = this.props;

		return (
			<main className={ "Page " + (className || "") }>
				<div className="Page-inner">
					{ children }
				</div>
			</main>
		);
	}
}

export default Page;