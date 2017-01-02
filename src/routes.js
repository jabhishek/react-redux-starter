import Trades from './components/trades-page/trades-page-connect';
import Portfolios from './components/portfolio/portfolio-connect';
import Login from './components/login/login';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import React from 'react';

export const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Trades} />
		<Route path="/trades" component={Trades}/>
		<Route path="/login-redirect" component={Login}/>
		<Route path="/portfolios" component={Portfolios}/>
	</Route>
);