/* @flow */
import React from "react";
import styled from "styled-components";
import BaseComponent, { type BaseProps } from "common/components/BaseComponent";

type LinkProps = BaseProps & {
  href?: string,
  anchor?: boolean
};

const Link = ({ children, ...rest }: LinkProps) => (
  <Wrapper as="a" {...rest}>
    <span>{children}</span>
  </Wrapper>
);

const Wrapper = styled(BaseComponent).attrs(props => ({
  href: props.href || "#",
  target: props.anchor ? "_self" : "_blank"
}))`
  color: ${({ theme }) => theme.darkPrimaryColor};
  text-decoration: none;
`;

export default Link;
