import React from 'react';
import {render} from 'react-dom';
import Home from './components/home';
import About from './components/about';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './app';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>{/**/}
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="home" component={Home}/>
        </Route>
    </Router>
), document.getElementById('root'));