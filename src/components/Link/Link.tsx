import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/Mixin";

interface LinkProps {
  children: ReactNode;
  theme: ThemeInterface;
  href?: string;
  target?: string;
}

const Link = ({ children, ...rest }: LinkProps) => (
  <Wrapper {...rest}>
    <span>{children}</span>
  </Wrapper>
);

export default Link;

const Wrapper = styled.a.attrs({
  target: props => (props.target ? "_self" : "_blank"),
  href: props => props.href || "#"
})`
  color: ${({ theme }) => theme.darkPrimaryColor};
  text-decoration: none;
  ${Mixin.setThemeFont()};
`;
