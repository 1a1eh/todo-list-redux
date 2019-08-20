import { ADD, TOGGLE } from '../action-types/index';

export const todos = (state = [], action) =>
{
    switch (action.type)
    {
        case ADD: return [
            ...state,
            {
                text: action.text,
                id: action.id,
                completed: false
            }
        ];
        case TOGGLE: return state.map((todo) =>
        {
            if (todo.id !== action.id)
            {
                return todo;
            }
            return {
                ...todo,
                completed: !action.completed
            }
        });
        default: return state;
    }
};