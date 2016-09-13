import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TradesForm extends Component {
	addTrade() {

	}

	render() {
		return (
			<div className="trades-form">
				<form onSubmit={ this.addTrade }>
					<TextField
						hintText="Hint Text"
						floatingLabelText="Floating Label Text"
					/><br />
				</form>
			</div>
		);
	}
}