import { createSelector } from "reselect";

export const ticketsSelector = state => state.tickets.data;
export const transfersFilterSelector = state => state.filters.transfers;

export const sortedTicketsByPriceSelector = createSelector(
  ticketsSelector,
  items => [...items].sort((a, b) => a.price - b.price)
);

export const sortedAndFilteredTicketsSelector = createSelector(
  sortedTicketsByPriceSelector,
  transfersFilterSelector,
  (items, filters) =>
    filters["all"] ? items : items.filter(item => filters[item.stops])
);
