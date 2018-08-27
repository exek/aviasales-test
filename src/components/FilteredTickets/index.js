import React from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket";
import {
  sortedAndFilteredTicketsSelector,
  currentCurrencySelector
} from "../../selectors";
import styled from "styled-components";
import i18n from "../../i18n";
import { Transition } from "react-spring";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FilteredTickets = ({ tickets, currentCurrency }) => (
  <List>
    <Transition
      keys={tickets.map(item => item.price)}
      from={{ opacity: 0, height: 0 }}
      enter={{ opacity: 1, height: "auto" }}
      leave={{ opacity: 0, height: 0 }}
    >
      {tickets.map(ticket => styles => (
        <li style={styles}>
          <Ticket {...ticket} currentCurrency={currentCurrency} />
        </li>
      ))}
    </Transition>
  </List>
);

const mapStateToProps = state => ({
  tickets: sortedAndFilteredTicketsSelector(state),
  currentCurrency: i18n[currentCurrencySelector(state)]
});

export default connect(mapStateToProps)(FilteredTickets);
