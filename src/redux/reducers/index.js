import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';

export const RootReducer = combineReducers({
	todoReducer
});