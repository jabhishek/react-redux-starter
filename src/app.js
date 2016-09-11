import React from 'react';
import Header from './components/common/header/header';
import './styles/index.less';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}
App.propTypes = {
	children: React.PropTypes.object
};
