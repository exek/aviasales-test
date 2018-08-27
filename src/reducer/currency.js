import * as constants from "../constants";

const init = {
  current: "RU",
  data: {
    RU: 1,
    USD: 0.015,
    EUR: 0.013
  }
};

export default (state = init, action) => {
  switch (action.type) {
    case constants.CHANGE_CURRENT_CURRENCY:
      return { ...state, current: action.currency };
    default:
      return state;
  }
};
