import styled, { css } from "styled-components";

const Icon = styled.img.attrs(({ alternative, asset, condition, alt }) => ({
  src: condition ? alternative : asset,
  alt
}))`
  vertical-align: middle;
  float: none;
  width: ${({ width, theme: { iconWidth } }) => width || iconWidth}px;
  height: ${({ height, theme: { iconHeight } }) => height || iconHeight}px;
  margin: ${({ margin }) => margin || 0};
  ${({ asset, theme: { accentColor } }) => !asset &&
    css`
      border: 1px dotted ${accentColor};
    `};
  ${({ fill, height }) => fill &&
    css`
      width: 100%;
      max-height: 100%;
      height: ${height ? height : 'auto'};
    `};
  ${({ pointer }) => pointer &&
    css`
      :hover {
        cursor: pointer;
      }
    `};
`;

export default Icon;
