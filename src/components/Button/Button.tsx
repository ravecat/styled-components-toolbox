import * as React from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/mixin";

interface ButtonProps {
  theme: ThemeInterface;
  type: string;
  children?: ReactNode;
  href?: string;
  disabled?: boolean;
}

export default styled<ButtonProps>(({ children, theme, ...rest }) => (
  <button {...rest}>
    <span>{children}</span>
  </button>
)).attrs({
  type: ({ type }) => type || "button"
})`
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  line-height: 1.5;
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

  ${({ disabled }) =>
    disabled &&
    css`
      && {
        cursor: default;
        background: ${({ theme }) => theme.textColor};
        border-color: ${({ theme }) => theme.dividerColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};
`;
