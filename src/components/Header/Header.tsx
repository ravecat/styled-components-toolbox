import * as React from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/Mixin";

interface HeaderProps {
  children?: ReactNode;
  theme: ThemeInterface;
  tag?: string;
  uppercase?: boolean;
  bold?: boolean;
}

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
