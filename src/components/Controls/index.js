import React from "react";
import styled from "styled-components";
import CurrencySwitcher from "./CurrencySwitcher";
import TransfersFilter from "./TransfersFilter";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(91, 137, 164);
  border-radius: 5px;
  padding: 25px 20px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: normal;
`;

export default () => {
  return (
    <Wrapper>
      <Section>
        <Title>Валюта</Title>
        <CurrencySwitcher />
      </Section>
      <Section>
        <Title>Количество пересадок</Title>
        <TransfersFilter />
      </Section>
    </Wrapper>
  );
};
