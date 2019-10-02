import React from 'react';
import ReactDOM from 'react-dom';
import './assets/StyleLoader';
import Home from './pages/Home';
import List from './pages/List';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route component={Home} exact path="/" />
			<Route component={List} exact path="/list" />
		</Router>
	</Provider>,
	document.getElementById('root')
);
