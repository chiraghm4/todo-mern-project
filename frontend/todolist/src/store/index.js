import { configureStore } from "@reduxjs/toolkit";
import searchedTodoSlice from "./searched-todo-slice";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: {
    searchedTodo: searchedTodoSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
