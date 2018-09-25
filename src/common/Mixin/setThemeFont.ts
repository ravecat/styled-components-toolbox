import { css } from "styled-components";
import { theme } from "common/theme";

const setThemeFont = (size?: number, weight?: number) => css`
  font-size: ${size || theme.fontSize}px;
  font-weight: ${weight || theme.fontWeight};
  font-family: ${theme.fontFamily};
`;

export default setThemeFont;
