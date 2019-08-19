import {combineReducers} from 'redux';
import {todos} from './reducer';
export const root_reducer = combineReducers({
    todos
});