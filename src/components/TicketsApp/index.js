import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Controls from "../Controls";
import FilteredTicket from "../FilteredTickets";

const Wrapper = styled.div`
  max-width: 818px;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  @media and (min-width: 640px) {
    margin-left: -20px;
    padding: 0;
  }
`;

const Aside = styled.aside`
  width: 100%;
  @media and (min-width: 640px) {
    margin-left: 20px;
    flex: 3;
  }
`;

const Content = styled.main`
  width: 100%;
  @media and (min-width: 640px) {
    margin-left: 20px;
    flex: 9;
  }
`;

const Header = styled.header`
  margin-left: 20px;
  width: 100%;
  height: 161px;
  background: url(logo.png) no-repeat center;
`;

injectGlobal`
  body {
    margin: 0;
    background-color: #F3F7FA;
    color: #4A4A4A;
    font-family: Helvetica, 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Header />
          <Aside>
            <Controls />
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
