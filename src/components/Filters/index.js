import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(91, 137, 164);
  border-radius: 5px;
  padding: 25px 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2``;

export default () => {
  return (
    <Wrapper>
      <Section>
        <h2 className="aside-title">Currency</h2>
        <ul className="currensy-filter__controls">
          <li>
            <button>Rub</button>
            <button>Usd</button>
            <button>Eur</button>
          </li>
        </ul>
      </Section>
      <Section>
        <h2 className="aside-title">Number of transfers</h2>
        <ul className="transfer-count-filter__controls">
          <li className="transfer-count-filter__control">
            <label>
              <input type="checkbox" />
              All
            </label>
          </li>
          <li className="transfer-count-filter__control">
            <label>
              <input type="checkbox" />1
            </label>
          </li>
          <li className="transfer-count-filter__control">
            <label>
              <input type="checkbox" />2
            </label>
          </li>
          <li className="transfer-count-filter__control">
            <label>
              <input type="checkbox" />3
            </label>
          </li>
        </ul>
      </Section>
    </Wrapper>
  );
};
