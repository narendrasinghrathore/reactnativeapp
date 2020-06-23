import { ITodo } from "../../models";
import { ADD_TODO } from "./todos.actions.types";

let nextTodoId = 0;

/**
 * Action for creating new todo
 * @param content: ITODO
 */
export const addTodo = (content: ITodo) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});
