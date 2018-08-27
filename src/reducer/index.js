import { combineReducers } from "redux";
import filters from "./filters";
import tickets from "./tickets";

export default combineReducers({
  filters,
  tickets
});
