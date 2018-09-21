import styled, { css } from "styled-components";
import { ReactNode } from "react";
import Link from "components/Link";

interface Props {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
}

export default styled(Link)<Props>`
  display: table;
  height: 32px;
  padding: 0 15px;
  text-align: center;
  text-decoration: none;
  letter-spacing: normal;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
  font-size: 14px;

  :hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.primaryColor};
  }

  & span {
    display: table-cell;
    vertical-align: middle;
  }

  ${props =>
    props.disabled &&
    css`
      && {
        cursor: default;
        background: ${({ theme }) => theme.textColor};
        border-color: ${({ theme }) => theme.dividerColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};
`;
