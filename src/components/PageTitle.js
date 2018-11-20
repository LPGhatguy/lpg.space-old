import React from "react";

import { RouterContext } from "./Router";

export default function PageTitle(props) {
	return (
		<RouterContext.Consumer>
			{context => <InnerTitle context={ context } { ...props } />}
		</RouterContext.Consumer>
	);
}

class InnerTitle extends React.Component {
	constructor(props) {
		super(props);

		props.context.pageTitle = props.value;
	}

	componentDidMount() {
		const titleElement = document.head.querySelector("title");

		titleElement.innerText = this.props.value;
	}

	render() {
		return null;
	}
}