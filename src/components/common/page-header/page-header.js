import React, { Component } from 'react';
import styles from './page-header.less';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<div className={ styles.header }>
				<h1>Portfolio Manager</h1>
				<a href="/auth/google" className={ styles.loginButton }>Login with Google</a>
			</div>
		);
	}
}
Header.propTypes = {
	authActions: React.PropTypes.object
};

const mapDispatchToProps = () => {
	return { };
};

export default connect(
	null,
	mapDispatchToProps
)(Header);