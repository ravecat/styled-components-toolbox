import React from "react";
import styled from "styled-components";

const Teapot = () => (
  <App>
    <Header>
      <Title>custom-create-react-app</Title>
    </Header>
  </App>
);

export default Teapot;

const App = styled.div`
  text-align: center;
`;

const Header = styled.header`
  height: 150px;
  padding: 20px;
  background-color: #222;
  color: white;
`;

const Title = styled.h1`
  font: 1.5em sans-serif;
`;
