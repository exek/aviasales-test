import { combinerReducers } from "react-redux";
import filters from "./filters";
import tickets from "./tickets";

export default combinerReducers({
  filters,
  tickets
});
