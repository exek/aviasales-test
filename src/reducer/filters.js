import * as actionTypes from "../actions/actionTypes";

const init = {
  transfers: {
    ":all": true,
    ":0": false,
    ":1": false,
    ":2": false,
    ":3": false
  }
};

export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TRANSFERS_FILTER:
      return {
        ...state,
        transfers: {
          ...state.transfers,
          [action.key]: !state.transfers[action.key]
        }
      };
    default:
      return state;
  }
};
