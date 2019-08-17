
export const Reducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD': {
            return [
                ...state,
                action.data
            ]
        }
        default: return state;
    }
};