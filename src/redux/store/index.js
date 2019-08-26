import RootReduer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReduer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
