import { ADD, TOGGLE, DELETE } from '../action-types/index';

export const addTodoReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					id: action.id,
					completed: false,
					text: action.text
				}
			];
		case TOGGLE:
			return action.data;
		case DELETE:
			return action.data;
		default:
			return state;
	}
};
