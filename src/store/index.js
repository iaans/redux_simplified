//Libs
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducer
import person from "./reducers/person.js";

export default createStore(
  combineReducers({
    person,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
