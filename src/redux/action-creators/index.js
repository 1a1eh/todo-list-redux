import { ADD, TOGGLE } from '../action-types/index';
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