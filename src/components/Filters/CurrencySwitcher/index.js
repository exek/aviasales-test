import React from "react";
import styled from "styled-components";

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
  background-color: ${props => (props.selected ? "#2196F3" : "white")};
  color: ${props => (props.selected ? "white" : "#2196f3")};
  border-color: ${props => (props.selected ? "#2196F3" : "#d2d5d6")};
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  &:hover {
    background-color: #f2fcff;
    border-color: #64b5f5;
    position: relative;
    color: #2196f3;
  }
`;

export default () => {
  return (
    <Tabs>
      <Tab selected>RU</Tab>
      <Tab>USD</Tab>
      <Tab>EUR</Tab>
    </Tabs>
  );
};
