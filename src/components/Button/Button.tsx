import * as React from "react";
import styled from "styled-components";
import buttonStyles from "./Button.styles";

interface Props {
  children: any,
  href?: string,
  disabled?: boolean,
}

const Button = ({ children, ...rest }: Props) => (
  <Wrapper {...rest}>
    <span>{children}</span>
  </Wrapper>
);

export default Button;

const Wrapper = styled.button`
  display: inline-block;
  ${buttonStyles};
`;
