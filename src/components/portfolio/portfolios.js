import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class PortfolioPage extends Component {
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

const mapStateToProps = (state) => {
	return {
		portfolios: state.portfolios
	};
};

export default connect(
	mapStateToProps,
	null
)(PortfolioPage);