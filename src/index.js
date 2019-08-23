import React from 'react';
import ReactDOM from 'react-dom';
import './assets/StyleLoader';
import Home from './pages/Home';
import store from './redux/store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
);
