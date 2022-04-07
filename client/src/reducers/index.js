import { combineReducers } from "redux";

import { reducer } from "./posts";
import auth from "./auth";

export default combineReducers({
  reducer,
  auth,
});
