import React from 'react';
import './styles/index.less';

export default class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
App.propTypes = {
	children: React.PropTypes.object
};
