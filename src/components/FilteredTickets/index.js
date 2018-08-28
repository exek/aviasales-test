import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket";
import {
  sortedAndFilteredTicketsSelector,
  currentCurrencySelector,
  ticketsLoadingSelector,
  ticketsErrorSelector
} from "../../selectors";
import { fetchTickets } from "../../actions";
import styled from "styled-components";
import i18n from "../../i18n";
import { Transition } from "react-spring";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class FilteredTickets extends Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  render() {
    const { tickets, currentCurrency, loading, error } = this.props;
    return (
      <Fragment>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка {error.message}</p>}
        {tickets.length && !loading && (
          <List>
            <Transition
              keys={tickets.map(item => item.id)}
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
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tickets: sortedAndFilteredTicketsSelector(state),
  currentCurrency: i18n[currentCurrencySelector(state)],
  loading: ticketsLoadingSelector(state),
  error: ticketsErrorSelector(state)
});

export default connect(
  mapStateToProps,
  { fetchTickets }
)(FilteredTickets);
