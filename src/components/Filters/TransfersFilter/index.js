import React from "react";
import { connect } from "react-redux";
import { transfersFilterSelector } from "../../../selectors";
import { toggleTransfersFilter as toggle } from "../../../actions";
import dictionary from "../../../i18n";

const TransfersFilter = ({ filters, toggle }) => (
  <ul>
    {Object.keys(filters).map(key => (
      <li key={key}>
        <label>
          <input
            type="checkbox"
            checked={filters[key]}
            onChange={() => toggle(key)}
          />
          {dictionary[key]}
        </label>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  filters: transfersFilterSelector(state)
});

export default connect(
  mapStateToProps,
  { toggle }
)(TransfersFilter);
