import React, { Component, PropTypes } from 'react';

export default class PortfolioPage extends Component {
	render() {
		return (
			<div className="container">
				{ this.props.portfolios.length } portfolios
			</div>
		);
	}
}
PortfolioPage.propTypes = {
	portfolios: PropTypes.array
};
