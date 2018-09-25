import * as React from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/Mixin";

interface Props {
  children: ReactNode;
  theme: ThemeInterface;
  href?: string;
  disabled?: boolean;
}

const Button: React.SFC<Props> = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <span>{children}</span>
  </Wrapper>
);

export default Button;

const Wrapper = styled.button`
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: normal;
  cursor: pointer;
  outline: 0;
  white-space: nowrap;
  ${Mixin.setThemeFont()}
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0;
  
  :hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.primaryColor};
  }

  ${props =>
    props.disabled &&
    css`
      && {
        cursor: default;
        background: ${({ theme }) => theme.textColor};
        border-color: ${({ theme }) => theme.dividerColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};
`;
