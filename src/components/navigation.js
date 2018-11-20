import React from "react";
import { Link as DomLink, NavLink as DomNavLink } from "react-router-dom";

const NavContext = React.createContext();

export const NavProvider = NavContext.Provider;

export class Link extends React.Component {
	render() {
		return (
			<NavProvider.Consumer>
				{ navContext => <LinkInternal
					linkComponent={ DomLink }
					linkProps={ this.props }
					navContext={ navContext } /> }
			</NavProvider.Consumer>
		);
	}
}

export class NavLink extends React.Component {
	render() {
		return (
			<NavProvider.Consumer>
				{ navContext => <LinkInternal
					linkComponent={ DomNavLink }
					linkProps={ this.props }
					navContext={ navContext } /> }
			</NavProvider.Consumer>
		);
	}
}

class LinkInternal extends React.Component {
	render() {
		const LinkComponent = this.props.linkComponent;
		return <LinkComponent {...this.props.linkProps} />;
	}

	componentDidMount() {
		this.props.navContext.toVisit.push(this.props.to);
	}
}