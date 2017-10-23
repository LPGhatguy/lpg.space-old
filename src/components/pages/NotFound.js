import React from "react";

import Page from "../Page";

import "./NotFound.css";

export default class NotFound extends React.Component {
	componentWillMount() {
		if (this.props.staticContext) {
			this.props.staticContext.status = 404;
		}
	}

	render() {
		return (
			<Page className="NotFound">
				404: Not Found!
			</Page>
		);
	}
}