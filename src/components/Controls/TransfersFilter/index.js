import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { transfersFilterSelector } from "../../../selectors";
import { toggleTransfersFilter as toggle } from "../../../actions";
import dictionary from "../../../i18n";

const FilterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 13px;
`;

const TransfersFilter = ({ filters, toggle }) => (
  <FilterList>
    {Object.keys(filters).map(key => (
      <ListItem key={key}>
        <input
          style={{ fontSize: 25 }}
          type="checkbox"
          checked={filters[key]}
          onChange={() => toggle(key)}
        />
        <label>{dictionary[key]}</label>
      </ListItem>
    ))}
  </FilterList>
);

const mapStateToProps = state => ({
  filters: transfersFilterSelector(state)
});

export default connect(
  mapStateToProps,
  { toggle }
)(TransfersFilter);
