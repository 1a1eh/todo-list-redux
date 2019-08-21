import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));