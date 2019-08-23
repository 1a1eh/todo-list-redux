import RootReduer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(RootReduer, applyMiddleware(thunk));
export default store;
