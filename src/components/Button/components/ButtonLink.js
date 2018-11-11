/* @flow */
import { type ComponentType } from "react";
import styled, { css } from "styled-components";
import Link from "components/Link";
import { type BaseProps } from "common/components/BaseComponent";

type ButtonLinkProps = BaseProps & {
  disabled?: boolean
};

const ButtonLink: ComponentType<ButtonLinkProps> = styled(Link)`
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  letter-spacing: normal;
  cursor: pointer;
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
      cursor: default;
      background: ${({ theme }) => theme.textColor};
      border-color: ${({ theme }) => theme.dividerColor};
      color: ${({ theme }) => theme.dividerColor};
      pointer-events: none;
    `};
`;

export default ButtonLink;
