import * as constants from "../constants";

export const toggleTransfersFilter = key => ({
  type: constants.TOGGLE_TRANSFERS_FILTER,
  key
});

export const toggleCurrentCurrency = currency => ({
  type: constants.CHANGE_CURRENT_CURRENCY,
  currency
});
