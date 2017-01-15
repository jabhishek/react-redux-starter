import React, { Component } from 'react';
import storage from '../../utils/localStore';
import {push as pushPath} from 'react-router-redux';
import * as authActions from '../../actionCreators/authActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LoginRedirect extends Component {
	componentWillMount() {
		const token = this.props.location.query.token;
		storage.set(token);

		authActions.getLoggedInUser().then((user) => {
			this.props.authActions.saveUser(user);
		});
		this.props.pushPath('/portfolios');
	}

	render() {
		return (
			<div className="login-page">
				Login
			</div>
		);
	}
}
LoginRedirect.propTypes = {
	location: React.PropTypes.object,
	pushPath: React.PropTypes.func,
	authActions: React.PropTypes.object
};


const mapDispatchToProps = (dispatch) => {
	return {
		pushPath: bindActionCreators(pushPath, dispatch),
		authActions: bindActionCreators(authActions, dispatch)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(LoginRedirect);

