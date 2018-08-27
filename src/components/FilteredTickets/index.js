import React from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket";
import {
  sortedAndFilteredTicketsSelector,
  currentCurrencySelector
} from "../../selectors";
import styled from "styled-components";
import i18n from "../../i18n";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FilteredTickets = ({ tickets, currentCurrency }) => (
  <List>
    {tickets.map(ticket => (
      <li key={ticket.price}>
        <Ticket {...ticket} currentCurrency={currentCurrency} />
      </li>
    ))}
  </List>
);

const mapStateToProps = state => ({
  tickets: sortedAndFilteredTicketsSelector(state),
  currentCurrency: i18n[currentCurrencySelector(state)]
});

export default connect(mapStateToProps)(FilteredTickets);
