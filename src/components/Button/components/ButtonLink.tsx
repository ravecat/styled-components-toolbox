import styled, { css } from "styled-components";
import { ReactNode } from "react";
import { ThemeInterface } from "common/theme";
import Link from "components/Link";
import Mixin from "common/Mixin";

interface ButtonLinkProps {
  children: ReactNode;
  theme: ThemeInterface;
  href?: string;
  disabled?: boolean;
}

export default styled(Link)<ButtonLinkProps>`
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  letter-spacing: normal;
  cursor: pointer;
  ${Mixin.setThemeFont()}
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
