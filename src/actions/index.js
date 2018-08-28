import * as constants from "../constants";
import uuidv1 from "uuid/v1";

export const toggleTransfersFilter = key => ({
  type: constants.TOGGLE_TRANSFERS_FILTER,
  key
});

export const toggleCurrentCurrency = currency => ({
  type: constants.CHANGE_CURRENT_CURRENCY,
  currency
});

export const fetchTickets = () => dispatch => {
  dispatch({
    type: constants.TICKETS_FETCH_REQUEST
  });
  fetch("./tickets.json")
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: constants.TICKETS_FETCH_SUCCESS,
        data: data.tickets.map(ticket => {
          ticket.id = uuidv1();
          return ticket;
        })
      });
    })
    .catch(error => {
      dispatch({
        type: constants.TICKETS_FETCH_FAIL,
        error: error.message
      });
    });
};
