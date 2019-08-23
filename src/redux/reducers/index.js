import { combineReducers } from 'redux';
import { addTodoReducer } from './addTodoReducer';

const RootReducer = combineReducers({
	addTodoReducer
});
export default RootReducer;
