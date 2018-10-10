import * as React from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/mixin";

interface HeaderProps {
  children?: ReactNode;
  theme: ThemeInterface;
  tag?: string;
  uppercase?: boolean;
  bold?: boolean;
}

/* 
Templated literals with inline functions are broken
Associated with https://github.com/prettier/prettier/issues/5147, https://github.com/prettier/prettier/issues/5185
*/
export default styled<HeaderProps>(
  ({ children, theme, tag: Tag = "h1", ...rest }) => (
    <Tag {...rest}>{children}</Tag>
  )
)`
  color: ${({ theme }) => theme.primaryTextColor};
  ${Mixin.setThemeFont(21)} ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
`;
