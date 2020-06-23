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

// Async action
// export const SearchMusic = (term: string) => {
//   return (disptach: any) => {
//     disptach(requestMusicSearch(term));
//     return http.request(
//       {
//         method: "GET",
//         url: `${apiUrl}${term}`,
//       },
//       (response: any) => {
//         const { resultCount, results } = response.data;
//         const data = { resultCount, results };
//         disptach(requestMusicSearchSuccess(data));
//       },
//       (reject: any) => {
//         disptach(requestMusicSearchFail(reject));
//       }
//     );
//   };
// };
