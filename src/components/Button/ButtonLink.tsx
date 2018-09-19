import * as React from "react";
import styled from "styled-components";
import buttonStyles from "./Button.styles";

interface Props {
  children: any,
  href?: string,
}

const ButtonLink = ({ children, ...rest }: Props) => (
  // Use custom A link instead Wrapper
  <Wrapper target="_blank" {...rest}>
    <Span>{children}</Span>
  </Wrapper>
);

export default ButtonLink;

const Wrapper = styled.a`
  display: table;
  ${buttonStyles};
`;

const Span = styled.span`
  display: table-cell;
  vertical-align: middle;
`;
