import React from "react";
import styled from "styled-components";
import i18n from "../../../i18n";

const Box = styled.article`
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(91, 137, 164);
  border-radius: 5px;
  display: flex;
  margin-bottom: 20px;
`;

const Left = styled.div`
  flex: 0 1 200px;
  padding: 25px 20px;
  border-right: 1px solid #eceff1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  padding: 25px 20px;
  display: flex;
`;

const Transfer = styled.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  color: #8b9497;
  align-self: flex-start;
  padding-bottom: 20px;
  background: url(plane.png) no-repeat center center;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 6px;
  font-size: 16px;
  background-color: #ff6d00;
  color: white;
  border-radius: 5px;
  border: 0
  box-shadow: 0 1px 0 #D64D08, 0 0 5px rgba(0,0,0,.25);
  cursor: pointer;
`;

const Time = styled.time`
  font-size: 32px;
`;

const Place = styled.p`
  margin: 10px 0 5px;
  font-size: 12px;
`;

const Date = styled.time`
  font-size: 12px;
  color: #8b9497;
`;

const Origin = styled.div`
  text-align: left;
`;

const Destination = styled.div`
  text-align: right;
`;

const AirlineLogo = styled.div`
  padding: 20px 0;
`;

export default ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  stops,
  price,
  currentCurrency
}) => {
  return (
    <Box>
      <Left>
        <AirlineLogo>
          <img src="turkish-logo.png" alt="" />
        </AirlineLogo>
        <BuyButton>
          Купить
          <br /> за {price.toFixed(2)}
          {currentCurrency}
        </BuyButton>
      </Left>
      <Right>
        <Origin>
          <Time>{departure_time}</Time>
          <Place>
            {origin}, {origin_name}
          </Place>
          <Date>{departure_date}</Date>
        </Origin>
        <Transfer>{stops > 0 && <div>{i18n[`:${stops}`]}</div>}</Transfer>
        <Destination>
          <Time>{arrival_time}</Time>
          <Place>
            {destination}, {destination_name}
          </Place>
          <Date>{arrival_date}</Date>
        </Destination>
      </Right>
    </Box>
  );
};
