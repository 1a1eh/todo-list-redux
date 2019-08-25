import cuid from 'cuid'

import { ADD, TOGGLE, DELETE } from '../action-types/index';

export const addTodo = (text) => {
	return {
		type: ADD,
		text,
		id: cuid()
	};
};

export const toggleTodoState = (id) => {
	return {
		type: TOGGLE,
		id
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE,
		id
	};
};
