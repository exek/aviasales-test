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

export default () => {
  return (
    <Box>
      <Left>
        <div>
          <img src="turkish-logo.png" alt="" />
        </div>
        <BuyButton>
          Купить
          <br /> за 15000₽
        </BuyButton>
      </Left>
      <Right>
        <div className="departure">
          <p>09:25</p>
          <p>VVO, Владивосток</p>
          <p>9 окт 2018, Пт</p>
        </div>
        <Transfer>
          1<br /> Пересадка
        </Transfer>
        <div className="departure">
          <p>09:25</p>
          <p>VVO, Владивосток</p>
          <p>9 окт 2018, Пт</p>
        </div>
      </Right>
    </Box>
  );
};
