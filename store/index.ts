import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
import { todos } from "./reducers";

const rootReducer = combineReducers({ todos });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export * from "./actions";
export * from "./reducers";
export * from "./selectors";

export default store;
