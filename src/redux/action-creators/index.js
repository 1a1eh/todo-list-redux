import { ADD, TOGGLE, DELETE } from '../action-types/index';

export const addTodoAction = (text, id) => {
	return {
		type: ADD,
		text,
		id
	};
};

export const toggleAction = (data) => {
	return {
		type: TOGGLE,
		data
	};
};

export const deleteAction = (data) => {
	return {
		type: DELETE,
		data
	};
};
