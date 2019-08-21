import { ADD, DELETE } from '../action-types/index';

export const AddAction = (title, body, id) =>
{
    return {
        type: ADD,
        payload: { title, id, body }
    }
}

export const DeleteAction = (id, data) =>
{
    let filteredData = data.filter(item =>
    {
        return item.id !== id
    })
    return {
        type: DELETE,
        data: filteredData
    }
}