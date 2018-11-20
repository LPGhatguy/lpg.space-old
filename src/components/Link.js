import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { RouterContext } from "./Router";

export default function Link(props) {
	return (
		<RouterContext.Consumer>
			{context => <InnerLink context={ context } innerProps={ props } />}
		</RouterContext.Consumer>
	);
}

class InnerLink extends React.Component {
	constructor(props) {
		super(props);

		const { context, innerProps } = props;
		context.seenUrls.push(innerProps.to)
	}

	render() {
		const { innerProps } = this.props;

		return <RouterLink { ...innerProps } />
	}
}