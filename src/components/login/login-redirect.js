import React, { Component } from 'react';
import storage from '../../utils/localStore';
import {push as pushPath} from 'react-router-redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LoginRedirect extends Component {
	componentWillMount() {
		storage.set(this.props.location.query.token);
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
	pushPath: React.PropTypes.func
};


const mapDispatchToProps = (dispatch) => {
	return {
		pushPath: bindActionCreators(pushPath, dispatch)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(LoginRedirect);

