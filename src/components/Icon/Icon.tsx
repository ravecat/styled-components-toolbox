import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";

interface IconProps {
  theme: ThemeInterface;
  asset?: string;
  alternative?: string;
  condition?: any;
  alt?: string;
  margin?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default styled.img.attrs<IconProps>({
  src: ({ condition, alternative, asset }) => (condition ? alternative : asset),
  alt: ({ alt }) => alt
})`
  vertical-align: middle;
  float: none;
  width: ${({ width, theme: { iconWidth } }) => width || iconWidth}px;
  height: ${({ height, theme: { iconHeight } }) => height || iconHeight}px;
  margin: ${({ margin }) => margin || 0};
  ${({ asset, theme: { accentColor } }) =>
    !asset &&
    css`
      border: 1px dotted ${accentColor};
    `};
  ${({ fill }) =>
    fill &&
    css`
      width: 100%;
      max-height: 100%;
      height: auto;
    `};
`;
