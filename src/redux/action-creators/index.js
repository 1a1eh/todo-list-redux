let nextTodoId = 0
export const ADD = text => ({
  type: 'ADD',
  id: nextTodoId++,
  text
})