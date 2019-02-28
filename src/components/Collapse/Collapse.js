import React from "react";
import styled, { css } from "styled-components";
import { theme } from "common/theme";
import BaseComponent from "common/components/BaseComponent";
import CollapseIcon from "./components/CollapseIcon";

const Collapse = ({
  children,
  header,
  condition,
  handleClick,
  ...rest
}) =>
  <Wrapper {...rest}>
    <HeaderWrapper {...rest}>
      <Header>{header}</Header>
      <CollapseIcon condition={condition} onClick={handleClick} />
    </HeaderWrapper>
    <Content condition={condition} {...rest}>
      {children}
    </Content>
  </Wrapper>

export default Collapse;

const Wrapper = styled(BaseComponent)`
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
`;

const HeaderWrapper = styled.div`
  display: table;
  padding: 12px;
  color: ${theme.textColor};
  background-color: ${theme.primaryColor};
`;

const Header = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
`;

const Content = styled.div`
  padding: 12px;

  ${({ condition }) => !condition &&
    css`
      display: none;
    `};
`;
