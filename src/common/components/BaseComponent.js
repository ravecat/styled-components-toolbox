/* @flow */
import * as React from "react";
import styled, { css, type ReactComponentStyled } from "styled-components";
import { theme, type Theme } from "common/theme";

export type BaseProps = {
  children?: React.Node,
  theme?: Theme,
  as?: string
};

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
const BaseComponent: ReactComponentStyled<BaseProps> = styled.div`
  ${baseStyles}
  
  * {
    ${baseStyles} [hidden] {
      display: none !important;
    }

    li {
      list-style-type: none;
    }
  }
`;

export default BaseComponent;
