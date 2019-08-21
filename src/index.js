import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/StyleLoader';
import Add from './pages/Add';
import List from './pages/List';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {store} from './redux/store/index';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Add} />
            <Route path="/list" component={List} />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
