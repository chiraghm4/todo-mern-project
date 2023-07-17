import { createSlice } from "@reduxjs/toolkit";

const searchedTodoSlice = createSlice({
  name: "searchedTodo",
  initialState: {
    todoList: []
  },
  reducers: {
    changeState(state, actions) {
      return [...state.todoList, actions.payload]
    },
  },
});

export const searchedTodoActions = searchedTodoSlice.actions;

export default searchedTodoSlice;
