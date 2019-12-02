import React from "react";
import styled, { css } from "styled-components";

import Icon from "../Icon";

import { theme } from "common/theme";
import BaseComponent from "components/BaseComponent";

const Button = ({ children, icon, ...rest }) => (
  <Wrapper as="button" {...rest}>
    <IconWrapper>{icon ? <Icon asset={icon} /> : null}</IconWrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled(BaseComponent).attrs(({ type = "button" }) => ({
  type
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
  color: ${theme.primaryColor};
  background: ${theme.normalColor};
  border: 1px solid ${theme.primaryColor};
  border-radius: 0;

  &:hover {
    color: ${theme.accentColor};
    border-color: ${theme.accentColor};
  }

  ${({ primary }) =>
    primary &&
    css`
      && {
        background: ${theme.primaryColor};
        color: ${theme.normalColor};
      }

      &:hover {
        background: ${theme.accentColor};
        color: ${theme.textColor};
      }
    `};

  ${({ dashed }) =>
    dashed &&
    css`
      && {
        background: ${theme.textColor};
        border-color: ${theme.dividerColor};
        border: 1px dashed ${theme.lightPrimaryColor};
        color: ${theme.dividerColor};
      }

      &:hover {
        border-color: ${theme.accentColor};
        color: ${theme.accentColor};
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
      }
    `};

  ${({ link }) =>
    link &&
    css`
      && {
        background-color: transparent;
        border: 0;
        color: ${theme.primaryColor};
        text-decoration: underline;
      }

      &:hover {
        color: ${theme.accentColor};
      }
    `};

  ${({ ghost }) =>
    ghost &&
    css`
      && {
        background: transparent;
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      && {
        cursor: default;
        background: ${theme.textColor};
        border-color: ${theme.dividerColor};
        color: ${theme.dividerColor};
      }
    `};
`;

const IconWrapper = styled.i`
  ${Icon} {
    width: 14px;
    height: 14px;
    margin-right: 8px;
    vertical-align: -1.75px;
  }
`;

export default Button;
