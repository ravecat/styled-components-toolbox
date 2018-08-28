import React from "react";
import styled from "styled-components";

const Main = () => <Header>styled-components-toolbox</Header>;

export default Main;

const Header = styled.header`
  font-weight: 100;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: white;
`;
