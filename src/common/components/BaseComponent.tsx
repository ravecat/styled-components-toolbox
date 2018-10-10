import { ReactNode } from "react";
import styled, { theme, css, ThemeInterface } from "common/theme";

export interface BaseProps {
  theme?: ThemeInterface;
  children?: ReactNode;
  as?: string;
}

export const baseStyles = css`
  margin: 0;
  padding: 0;
  box-sizing: ${theme.boxSizing};
  border: ${theme.border};
  vertical-align: ${theme.verticalAlign};
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  font-weight: ${theme.fontWeight};
  color: ${theme.primaryTextColor};
`;

const BaseComponent = styled.div<BaseProps>`
  ${baseStyles} * {
    ${baseStyles} [hidden] {
      display: none !important;
    }

    li {
      list-style-type: none;
    }
  }
`;

export default BaseComponent;
