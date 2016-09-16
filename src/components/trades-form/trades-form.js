import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TradesForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			codeValue: ''
		};
	}

	onCodeChange(event) {
		this.setState({
			codeValue: event.target.value,
		});
	}

	addTrade() {

	}

	render() {
		return (
			<div className="trades-form">
				<form onSubmit={ this.addTrade }>
					<TextField
						hintText="Enter code"
						floatingLabelText="Security Code"
						value={ this.state.codeValue }
						onChange={ this.onCodeChange.bind(this) } />
				</form>
			</div>
		);
	}
}