import React from "react";
import styled, { css } from "styled-components";
import { BaseComponent, BaseProps } from "common/BaseComponent";

export interface ButtonProps extends BaseProps {
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  primary?: boolean;
  link?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  block?: boolean;
  dashed?: boolean;
  rounded?: boolean;
  onClick?: () => void;
}

const Wrapper = styled(BaseComponent).attrs<ButtonProps>(
  ({ type = "button" }) => ({
    type,
  })
)<ButtonProps>`
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  letter-spacing: normal;
  cursor: pointer;
  outline: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.neutralColor};
  border: 1px solid ${({ theme }) => theme.lightPrimaryColor};
  background: ${({ theme }) => theme.lightPrimaryColor};
  border-radius: 0;

  ${({ primary }) =>
    primary &&
    css`
      && {
        background: ${({ theme }) => theme.darkPrimaryColor};
        border: 1px solid ${({ theme }) => theme.darkPrimaryColor};
      }
    `};

  ${({ ghost }) =>
    ghost &&
    css`
      && {
        background: transparent;
        color: ${({ theme }) => theme.lightPrimaryColor};
      }
    `};

  ${({ dashed }) =>
    dashed &&
    css`
      && {
        background: ${({ theme }) => theme.neutralColor};
        border-color: ${({ theme }) => theme.dividerColor};
        border: 1px dashed ${({ theme }) => theme.lightPrimaryColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};

  ${({ rounded }) =>
    rounded &&
    css`
      && {
        border-radius: 4px;
      }
    `};

  ${({ block }) =>
    block &&
    css`
      && {
        display: inline-block;
        width: 100%;
        color: ${({ theme }) => theme.lightPrimaryColor};
      }
    `};

  ${({ link }) =>
    link &&
    css`
      && {
        background-color: transparent;
        border: 1px solid transparent;
        color: ${({ theme }) => theme.lightPrimaryColor};
        text-decoration: underline;
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      && {
        cursor: default;
        background: ${({ theme }) => theme.neutralColor};
        border-color: ${({ theme }) => theme.dividerColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};
`;

// const IconWrapper = styled.i`
//   ${Icon} {
//     width: 14px;
//     height: 14px;
//     margin-right: 8px;
//     vertical-align: -1.75px;
//   }
// `;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps) => (
  <Wrapper {...rest} as="button">
    {/* <IconWrapper>{icon ? <Icon asset={icon} /> : null}</IconWrapper> */}
    {children}
  </Wrapper>
);
