import cuid from 'cuid';
import { ADD, DELETE} from '../action-types';

export const addTodo = (text) => {
	return {
		text,
		type: ADD,
		id: cuid()
	};
};

export const deleteItem = (id) => {
  return {
    id,
    type: DELETE
  }
}
