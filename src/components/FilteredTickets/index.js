import React from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FilteredTickets = ({ tickets }) => {
  console.log(tickets);
  return (
    <List>
      {tickets.map(ticket => (
        <li key={ticket.price}>
          <Ticket {...ticket} />
        </li>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  tickets: state.tickets.data
});

export default connect(mapStateToProps)(FilteredTickets);
