import React from 'react';
import ReactDOM from 'react-dom';
import './assets/StyleLoader';
import Home from './pages/Home';
import List from './pages/List';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';

ReactDOM.render(
	<Provider store={store}>
		<Home />
		<List />
	</Provider>,
	document.getElementById('root')
);
