import React from 'react';
import {render} from 'react-dom';
import Home from './components/home';
import About from './components/about';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}/>
            <Route path="home" component={Home}/>
        </Route>
    </Router>
), document.getElementById('root'))