import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodos: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, item: action.payload.item };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos } = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
