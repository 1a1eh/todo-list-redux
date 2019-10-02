import { ADD } from '../action-types/index';

export const todos = (state = [], action) => {
	switch (action.type) {
		case ADD: return {
			id: action.id,
			text: action.text
		}
		default:
			return state;
	}
};
