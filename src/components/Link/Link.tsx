import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/mixin";

interface LinkProps {
  children: ReactNode;
  theme: ThemeInterface;
  href?: string;
  anchor?: boolean;
}

export default styled<LinkProps>(({ children, theme, ...rest }) => (
  <a {...rest}>
    <span>{children}</span>
  </a>
)).attrs({
  href: ({ href }) => href || "#",
  target: props => (props.anchor ? "_self" : "_blank")
})`
  color: ${({ theme }) => theme.darkPrimaryColor};
  text-decoration: none;
  ${Mixin.setThemeFont()};
`;
