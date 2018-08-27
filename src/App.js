import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Filters from "./components/Filters";
import FilteredTicket from "./components/FilteredTickets";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
`;
const Aside = styled.aside`
  margin-left: 20px;
  flex: 3;
`;
const Content = styled.main`
  margin-left: 20px;
  flex: 9;
`;
const Header = styled.header`
  margin-left: 20px;
  width: 100%;
  height: 161px;
  background: url(logo.png) no-repeat center;
`;

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
    background-color: #F3F7FA;
    color: #4A4A4A;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Header />
          <Aside>
            <Filters />
          </Aside>
          <Content>
            <FilteredTicket />
          </Content>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
