import { createSelector } from "reselect";

export const ticketsSelector = state => state.tickets.data;

export const sortedTicketsByPriceSelector = createSelector(
  ticketsSelector,
  items => [...items].sort((a, b) => a.price - b.price)
);
