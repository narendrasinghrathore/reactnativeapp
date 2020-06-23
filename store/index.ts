import { createStore } from "redux";
import { combineReducers } from "redux";

import { todos } from "./reducers";

const rootReducer = combineReducers({ todos });
const store = createStore(rootReducer);

export * from "./actions";
export * from "./reducers";
export * from "./selectors";

export default store;
