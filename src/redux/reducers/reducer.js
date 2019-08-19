
export const todos = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD': return [
            ...state,
            {
                text: action.text,
                id: action.id
            }
        ]
        default: return state;
    }
};