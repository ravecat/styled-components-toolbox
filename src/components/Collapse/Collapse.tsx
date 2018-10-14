import * as React from "react";
import styled, { css } from "common/theme";
import BaseComponent, { BaseProps } from "common/components/BaseComponent";
import CollapseIcon from "./components/CollapseIcon";

interface CollapseProps extends BaseProps {
  header: string;
  condition: boolean;
  handleClick(condition: boolean): boolean;
}

const Collapse = ({
  children,
  header,
  condition,
  handleClick,
  ...rest
}: CollapseProps) => (
  <Wrapper {...rest}>
    <HeaderWrapper {...rest}>
      <Header>{header}</Header>
      <CollapseIcon condition={condition} onClick={handleClick} />
    </HeaderWrapper>
    <Content condition={condition} {...rest}>
      {children}
    </Content>
  </Wrapper>
);

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
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primaryColor};
`;

const Header = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
`;

const Content = styled.div<{ condition: boolean }>`
  padding: 12px;

  ${({ condition }) =>
    !condition &&
    css`
      display: none;
    `};
`;
