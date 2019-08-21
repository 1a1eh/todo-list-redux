const AddListReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case "ADD": return [
            ...state,
            {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body
            }
        ]
        case "DELETE": return action.data
        default: return state;
    }
};
export default AddListReducer;