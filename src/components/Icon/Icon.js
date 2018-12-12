import styled, { css } from "styled-components";

const Icon = styled.img.attrs(props => ({
  src: props.condition ? props.alternative : props.asset,
  alt: props.alt
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
  ${({ fill }) => fill &&
    css`
      width: 100%;
      max-height: 100%;
      height: auto;
    `};
`;

export default Icon;
