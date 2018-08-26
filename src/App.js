import React from "react";
import styled from "styled-components";
import "./common/globalStyles";

const Main = () => (
  <Wrapper>
    <Header>styled-components-toolbox</Header>
  </Wrapper>
);

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #222;
  color: white;
`;

const Header = styled.header`
  font-weight: 100;
  font-size: 30px;
`;
