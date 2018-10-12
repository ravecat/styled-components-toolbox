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
  vertical-align: ${theme.verticalAlign};
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  font-weight: ${theme.fontWeight};
`;

/* 
Templated literals with inline functions are broken
Associated with https://github.com/prettier/prettier/issues/5147, https://github.com/prettier/prettier/issues/5185
*/
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
