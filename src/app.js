import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/common/header/header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/index.less';

injectTapEventPlugin();

export default class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}
App.propTypes = {
	children: React.PropTypes.object
};
