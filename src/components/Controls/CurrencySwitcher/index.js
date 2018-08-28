import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { currencySelector, currentCurrencySelector } from "../../../selectors";
import { toggleCurrentCurrency as toggle } from "../../../actions";

const Tabs = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Tab = styled.li`
  flex: 1;
  text-align: center;
  padding: 15px 0;
  border: 1px solid #d2d5d6;
  cursor: pointer;

  font-size: 12px;
  margin-left: -1px;
  background-color: white;
  color: #2196f3;
  border-color: #d2d5d6;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  &.selected {
    background-color: #2196f3;
    color: white;
    border-color: #2196f3;
  }
  &:hover:not(.selected) {
    background-color: #f2fcff;
    border-color: #64b5f5;
    position: relative;
    color: #2196f3;
  }
`;

const CurrencySwitcher = ({ currency, current, toggle }) => {
  console.log(Object.keys(currency));
  return (
    <Tabs>
      {Object.keys(currency).map(key => (
        <Tab
          key={key}
          className={current === key ? "selected" : ""}
          onClick={() => toggle(key)}
        >
          {key}
        </Tab>
      ))}
    </Tabs>
  );
};

const mapStateToProps = state => ({
  currency: currencySelector(state),
  current: currentCurrencySelector(state)
});

export default connect(
  mapStateToProps,
  { toggle }
)(CurrencySwitcher);
