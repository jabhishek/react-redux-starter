import Trades from './components/trades-page/trades-page';
import Portfolios from './components/portfolio/portfolio-connect';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import React from 'react';

export const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Trades} />
		<Route path="/trades" component={Trades}/>
		<Route path="/portfolios" component={Portfolios}/>
	</Route>
);