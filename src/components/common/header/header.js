import React, { Component } from 'react';
import styles from './header.less';

export default class Header extends Component {
	render() {
		return (
			<div className={ styles.header }>
				<h1>Portfolio Manager</h1>
			</div>
		);
	}
}