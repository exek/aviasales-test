import * as constants from "../constants";

export const toggleTransfersFilter = key => ({
  type: constants.TOGGLE_TRANSFERS_FILTER,
  key
});
