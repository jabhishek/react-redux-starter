import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';


const reducer = combineReducers({
	...reducers,
	routing: routerReducer
});
const logger = createLogger({
	duration: true,
	collapsed: true
});

const middleware = applyMiddleware(
	logger, thunk,
	routerMiddleware(browserHistory)
);

const store = createStore(
	reducer,
	middleware);

const history = syncHistoryWithStore(browserHistory, store);

render((
	<Provider store={store}>
		<Router history={history}>
			{ routes }
		</Router>
	</Provider>
), document.getElementById('root'));