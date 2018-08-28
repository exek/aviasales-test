import * as constants from "../constants";

const init = {
  data: [],
  loading: false,
  error: null
};

export default (state = init, action) => {
  switch (action.type) {
    case constants.TICKETS_FETCH_REQUEST:
      return { ...init, loading: true };
    case constants.TICKETS_FETCH_SUCCESS:
      return { ...init, data: action.data };
    case constants.TICKETS_FETCH_FAIL:
      return { ...init, error: action.error };
    default:
      return state;
  }
};
