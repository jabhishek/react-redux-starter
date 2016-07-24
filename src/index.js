import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

const reducer = combineReducers({
	...reducers,
	routing: routerReducer
});

const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

render((
	<Provider store={store}>
		<Router history={history}>
			{ routes }
		</Router>
	</Provider>
), document.getElementById('root'));