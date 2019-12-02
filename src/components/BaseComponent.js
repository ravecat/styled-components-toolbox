import styled from "styled-components";

import { theme } from "common/theme";

const BaseComponent = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: ${theme.boxSizing};
  vertical-align: ${theme.verticalAlign};
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  font-weight: ${theme.fontWeight};
  transition: all ease 0.35s;

  *,
  *:before,
  *:after {
    transition: all ease 0.35s;
  }

  [hidden] {
    display: none !important;
  }
`;

export default BaseComponent;
