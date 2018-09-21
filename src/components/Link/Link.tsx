import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode,
  href?: string,
  target?: string
}

const Link = ({ children, ...rest }: Props) => (
  <Wrapper {...rest}>
    <span>{children}</span>
  </Wrapper>
);

export default Link

const Wrapper = styled.a.attrs({
  target: props => props.target ? '_self' : '_blank',
  href: props => props.href || '#',
})`
  color: ${({ theme }) => theme.darkPrimaryColor};
  text-decoration: none;
`

