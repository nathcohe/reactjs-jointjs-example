import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory  } from 'react-router'
import { Provider } from 'react-redux'

import './assets/jointjs.css';
import configureStore from './store/configureStore';
import App from './containers/app';
import Design from './components/design';
import Playground from './components/playground';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Playground} />
            <Route path="/home" component={App} />
            <Route path="/design" component={Design} />
        </Router>
    </Provider>
), document.getElementById('app-root'));
