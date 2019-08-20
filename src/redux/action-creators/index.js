import { ADD, TOGGLE, DELETE } from '../action-types/index';
let nextTodoId = new Date().getTime();

export const AddAction = text => ({
  type: ADD,
  id: ++nextTodoId,
  text
});

export const ToggleAction = (completed,id) => ({
  type: TOGGLE,
  id,
  completed
});

export const DeleteAction = id => ({
  type: DELETE,
  id: id
})