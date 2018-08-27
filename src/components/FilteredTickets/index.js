import React from "react";
import Ticket from "./Ticket";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default () => {
  return (
    <List>
      <li>
        <Ticket />
      </li>
    </List>
  );
};
