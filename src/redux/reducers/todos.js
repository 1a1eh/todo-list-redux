import { ADD, TOGGLE, DELETE } from '../action-types/index';

export const todos = (state = [], action) => {
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
			return state.map(todo => {
				if (todo.id === action.id) {
					return {
						...todo,
						completed: !todo.completed
					}
				}

				return todo
			})
		case DELETE:
			return state.filter(item => item.id !== action.id);
		default:
			return state;
	}
};
