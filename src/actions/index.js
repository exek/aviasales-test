import * as actionTypes from "./actionTypes";

export const toggleTransfersFilter = key => ({
  type: actionTypes.TOGGLE_TRANSFERS_FILTER,
  key
});
