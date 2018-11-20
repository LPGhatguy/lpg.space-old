import React from "react";

import { RouterContext } from "./Router";

export default function PageDescription(props) {
	return (
		<RouterContext.Consumer>
			{context => <InnerDescription context={ context } { ...props } />}
		</RouterContext.Consumer>
	);
}

class InnerDescription extends React.Component {
	constructor(props) {
		super(props);

		props.context.pageDescription = props.value;
	}

	componentDidMount() {
		const titleElement = document.head.querySelector(`meta[name="description"]`);

		titleElement.content = this.props.value;
	}

	render() {
		return null;
	}
}