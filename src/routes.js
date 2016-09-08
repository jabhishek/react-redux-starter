import Home from './components/home';
import About from './components/about';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import React from 'react';

export const routes = (
	<Route path="/" component={App}>{/**/}
		<IndexRoute component={Home} />
		<Route path="/about" component={About}/>
		<Route path="/home" component={Home}/>
	</Route>
);