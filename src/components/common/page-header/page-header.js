import React, { Component } from 'react';
import styles from './page-header.less';
import request from 'superagent';

export default class Header extends Component {
	login() {
		request
			.get('/auth/google')
			.accept('application/json')
			.end((err, res) => {
				if (err) {
					// reject(err);
				} else {
					const response = JSON.parse(res.text);
					console.log(response);
					//dispatch(fetchPortfoliosSuccess(response.portfolios));
					//resolve(response.portfolios);
				}
			});
	}
	render() {
		return (
			<div className={ styles.header }>
				<h1>Portfolio Manager</h1>
				<a className={ styles.loginButton } onClick={ this.login.bind(this) }>Login with Google</a>
			</div>
		);
	}
}