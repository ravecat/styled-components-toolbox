import styled, { css } from "styled-components";
import { theme } from "common/theme";

const Icon = styled.img.attrs(({ alternative, asset, condition, alt }) => ({
  src: condition ? alternative : asset,
  alt
}))`
  vertical-align: middle;
  float: none;
  width: ${({ width }) => width || theme.iconWidth}px;
  height: ${({ height }) => height || theme.iconHeight}px;
  margin: ${({ margin }) => margin || 0};
  ${({ asset }) => !asset && css`
    border: 1px dotted ${theme.accentColor};
  `};
  ${({ fill, height }) => fill && css`
    width: 100%;
    max-height: 100%;
    height: ${height || 'auto'};
  `};
  ${({ pointer }) => pointer && css`
    &:hover {
      cursor: pointer;
    }
  `};
`;

export default Icon;
