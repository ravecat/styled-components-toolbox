import React from "react";
import styled from "styled-components";
import { theme } from "common/theme";
import BaseComponent from "common/components/BaseComponent";

const Link = ({ children, ...rest }) => (
  <Wrapper as="a" {...rest}>
    <span>{children}</span>
  </Wrapper>
);

const Wrapper = styled(BaseComponent).attrs(props => ({
  href: props.href || "#",
  target: props.anchor ? "_self" : "_blank"
}))`
  color: ${theme.darkPrimaryColor};
  text-decoration: none;
`;

export default Link;
