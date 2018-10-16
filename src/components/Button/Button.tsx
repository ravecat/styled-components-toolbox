import * as React from "react";
import styled, { css } from "common/theme";
import BaseComponent, { BaseProps } from "common/components/BaseComponent";

interface ButtonProps extends BaseProps {
  type?: string;
  href?: string;
  disabled?: boolean;
}

const Button = styled<ButtonProps>(({ children, ...rest }) => (
  <BaseComponent as="button" {...rest}>
    <span>{children}</span>
  </BaseComponent>
)).attrs({
  type: ({ type }: ButtonProps) => type || "button"
})`
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
