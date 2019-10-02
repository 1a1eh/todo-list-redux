import { ADD, DELETE } from '../action-types';

const initState = [];
export const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					text: action.text,
					id: action.id
				}
			];
		case DELETE:
			return state.filter((item) => {
				return item.id !== action.id;
			});
		default:
			return state;
	}
};
