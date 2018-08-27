import React from "react";
import styled from "styled-components";

const Box = styled.article`
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(91, 137, 164);
  border-radius: 5px;
  display: flex;
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
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 6px;
  font-size: 16px;
  background-color: #ff6d00;
  color: white;
  border-radius: 5px;
  border: 0
  box-shadow: 0 1px 0 #D64D08;
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
        <div>
          <img src="turkish-logo.png" alt="" />
        </div>
        <BuyButton>
          Купить
          <br /> за {price.toFixed(2)}
          {currentCurrency}
        </BuyButton>
      </Left>
      <Right>
        <div>
          <p>{departure_time}</p>
          <p>
            {origin}, {origin_name}
          </p>
          <p>{departure_date}</p>
        </div>
        <Transfer>
          {stops > 0 && (
            <div>
              {stops}
              <br /> Пересадки
            </div>
          )}
        </Transfer>
        <div>
          <p>{arrival_time}</p>
          <p>
            {destination}, {destination_name}
          </p>
          <p>{arrival_date}</p>
        </div>
      </Right>
    </Box>
  );
};
