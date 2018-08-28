import { createSelector } from "reselect";

export const ticketsSelector = state => state.tickets.data;
export const ticketsLoadingSelector = state => state.tickets.loading;
export const ticketsErrorSelector = state => state.tickets.error;
export const transfersFilterSelector = state => state.filters.transfers;
export const currencySelector = state => state.currency.data;
export const currentCurrencySelector = state => state.currency.current;

export const sortedTicketsByPriceSelector = createSelector(
  ticketsSelector,
  currencySelector,
  currentCurrencySelector,
  (items, rates, current) =>
    [...items]
      .sort((a, b) => a.price - b.price)
      .map(item => ({ ...item, price: rates[current] * item.price }))
);

export const sortedAndFilteredTicketsSelector = createSelector(
  sortedTicketsByPriceSelector,
  transfersFilterSelector,
  (items, filters) =>
    filters[":all"] ? items : items.filter(item => filters[`:${item.stops}`])
);
