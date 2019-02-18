import * as React from "react";
import styled, { css } from "styled-components";
import { theme } from "common/theme";

export const baseStyles = css`
  margin: 0;
  padding: 0;
  box-sizing: ${theme.boxSizing};
  vertical-align: ${theme.verticalAlign};
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  font-weight: ${theme.fontWeight};
`;

const BaseComponent = styled.div`
  ${baseStyles}
  
  * {
    ${baseStyles}
    
    [hidden] {
      display: none !important;
    }

    li {
      list-style-type: none;
    }
  }
`;

export default BaseComponent;
