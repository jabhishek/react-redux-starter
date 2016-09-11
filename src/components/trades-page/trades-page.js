import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Trades extends Component {
	render() {
		return (
			<div className="trades-page">
				{ this.props.trades.length }
			</div>
		);
	}
}
Trades.propTypes = {
	trades: PropTypes.array
};

const mapStateToProps = (state) => {
	return {
		trades: state.trades
	};
};

export default connect(
	mapStateToProps,
	null
)(Trades);