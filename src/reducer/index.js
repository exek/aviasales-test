import { combineReducers } from "redux";
import filters from "./filters";
import tickets from "./tickets";
import currency from "./currency";

export default combineReducers({
  filters,
  tickets,
  currency
});
