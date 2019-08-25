import { combineReducers } from 'redux';
import { todos } from './addTodoReducer';

const RootReducer = combineReducers({
	todos
});
export default RootReducer;
