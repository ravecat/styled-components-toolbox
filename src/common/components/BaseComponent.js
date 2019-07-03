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

  [hidden] {
    display: none !important;
  }
`;

export default BaseComponent
