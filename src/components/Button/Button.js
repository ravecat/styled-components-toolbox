/* @flow */
import React from "react";
import styled, { css } from "styled-components";
import BaseComponent, { type BaseProps } from "common/components/BaseComponent";

type ButtonProps = BaseProps & {
  type?: string,
  href?: string,
  disabled?: boolean
};

const Button = ({ children, ...rest }: ButtonProps) => (
  <Wrapper as="button" {...rest}>
    <span>{children}</span>
  </Wrapper>
);

const Wrapper = styled(BaseComponent).attrs(props => ({
  type: props.type || "button"
}))`
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  letter-spacing: normal;
  cursor: pointer;
  outline: 0;
  white-space: nowrap;
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

export default Button;
