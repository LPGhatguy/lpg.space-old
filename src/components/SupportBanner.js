import React from "react";

import "./SupportBanner.css";

const getSupported = () => {
	try {
		const value = localStorage.getItem("support-dismissed");

		if (value === "true") {
			return true;
		}
	} catch (e) {
		console.warn("localStorage threw an error. Skipping browser support check!");
		return true;
	}

	if (!window.CSS) {
		console.error(
			"Couldn't find CSS 'supports' API to detect features!\n" +
			"https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports"
		);
		return false;
	}

	if (!CSS.supports("--foo", "red")) {
		console.error(
			"CSS variables don't appear to be supported!"
		);
		return false;
	}

	return true;
};

export default class SupportBanner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			problems: false,
		};
	}

	componentDidMount() {
		this.setState({
			problems: !getSupported(),
		});
	}

	setDismissed = () => {
		this.setState({
			problems: false,
		});

		try {
			localStorage.setItem("support-dismissed", "true");
		} catch (e) {
			console.warn("Failed to save to localStorage, oops!");
		}
	};

	render() {
		if (!this.state.problems) {
			return null;
		}

		return (
			<div className="SupportBanner">
				<div className="SupportBanner-inner">
					<div className="SupportBanner-text">
						This site uses CSS variables, which your browser doesn't seem
						to support. Things may look broken, sorry!
					</div>
					<div className="SupportBanner-close" role="button" title="Close support notice" onClick={ this.setDismissed }>
						&times;
					</div>
				</div>
			</div>
		);
	}
}