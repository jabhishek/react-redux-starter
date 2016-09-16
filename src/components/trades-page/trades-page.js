import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TradesForm from '../trades-form/trades-form';

class Trades extends Component {
	render() {
		return (
			<div className="container">
				< TradesForm />
				{ this.props.trades.length } Trades
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