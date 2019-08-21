import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/StyleLoader';
import Add from './Add';
import List from './List';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Reducer = (state = [], action) =>
{
    switch (action.type)
    {
        case "ADD": return [
            ...state,
            {
                id: action.id,
                title: action.title,
                body: action.body
            }
        ]
        case "DELETE": return action.data
        default: return state;
    }
};

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Add} />
            <Route path="/list" component={List} />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
