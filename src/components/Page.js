import React from "react";

import "./Page.css";

const setTitle = title => {
	const titleElement = document.head.querySelector("title");

	if (!titleElement) {
		return;
	}

	if (title) {
		titleElement.innerText = "lpg | " + title;
	} else {
		titleElement.innerText = "lpg";
	}
};

const setDescription = description => {
	const descriptionElement = document.head.querySelector(`meta[name="description"]`);

	if (!descriptionElement) {
		return;
	}

	if (description) {
		descriptionElement.content = description;
	} else {
		descriptionElement.content = "Personal website of Lucien Greathouse";
	}
};

class Page extends React.Component {
	componentDidMount() {
		if (this.props.staticContext) {
			this.props.staticContext.title = this.props.title;
			this.props.staticContext.description = this.props.description;
		} else {
			setTitle(this.props.title);
			setDescription(this.props.description);
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