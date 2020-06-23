import { ITodoState, IAppState } from "../../models";

export const getAppState = (store: IAppState) => store;

export const getTodoState = (store: IAppState) => getAppState(store).todos;

export const getTodoList = (store: IAppState) =>
  getTodoState(store) ? getTodoState(store).list : [];

export const getName = (store: IAppState) =>
  getTodoState(store) ? getTodoState(store).name : "Default Name";
