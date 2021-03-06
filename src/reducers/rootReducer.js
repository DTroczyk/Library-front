import { combineReducers } from "redux";

import { itemReducer } from "./itemReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  items: itemReducer,
  user: userReducer,
})