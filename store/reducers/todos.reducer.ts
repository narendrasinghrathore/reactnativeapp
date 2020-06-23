import {} from "../actions";
import { ADD_TODO } from "../actions/todos.actions.types";
import { ITodoState } from "../../models";
const initialState: ITodoState = {
  list: [],
  name: "Todo List Test",
};

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        list: [...state.list, { ...content, id }],
      };
    }

    default:
      return state;
  }
};

export { todos };
