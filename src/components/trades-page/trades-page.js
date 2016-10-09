import React, { Component, PropTypes } from 'react';
import TradesForm from '../trades-form/trades-form';

export default class Trades extends Component {
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
