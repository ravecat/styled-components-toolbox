import { styled, css, BaseComponent } from "common/styled";
import type { HTMLProps, HTMLAttributes } from "react";

type Span = HTMLProps<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>;

export interface IconProps extends Span {
  /**
   * code point for main state
   */
  asset: string;
  /**
   * alternative text for the inaccessible icon
   */
  alt: string;
  /**
   * code point for conditional state
   */
  alternative?: string;
  /**
   * available tag
   */
  tag?: "i" | "span";
  /**
   * condition for changing asset
   */
  condition?: boolean;
  /**
   * pointer view for icon
   */
  pointer?: boolean;
  /**
   * icon width (works with non-unicode sources)
   */
  width?: string;
  /**
   * icon height (works with non-unicode sources)
   */
  height?: string;
  /**
   * set extended outer border
   */
  margin?: string;
}

// eslint-disable-next-line no-control-regex
const unicodeRegex = /[^\u0000-\u00ff]/;

/**
 * UI component for primitive graphic
 *
 * Support unicode characters
 * (_recommended_, [depends on](https://www.fileformat.info/info/unicode/font/index.htm) available font),
 * base64, URL
 */
export const Icon = styled(BaseComponent).attrs<IconProps>(
  ({ alternative = "", asset, condition, tag = "span" }) => ({
    content: condition ? alternative : asset,
    isBackgroundURL: !unicodeRegex.test(condition ? alternative : asset),
    as: tag,
  })
)<IconProps & { isBackgroundURL?: boolean }>`
  vertical-align: middle;
  float: none;
  font-style: normal;
  width: ${({ width, theme }) => width || theme.iconWidth};
  height: ${({ height, theme }) => height || theme.iconHeight};
  margin: ${({ margin }) => margin || 0};

  ${({ isBackgroundURL, content, width, height, theme }) =>
    isBackgroundURL
      ? css`
          &::before {
            display: inline-block;
            background: url(${content});
            width: ${width || theme.iconWidth};
            height: ${height || theme.iconHeight};
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center;
            content: "";
          }
        `
      : css`
          &::before {
            content: "${content}";
          }
        `};

  ${({ asset, theme }) =>
    !asset &&
    css`
      border: 1px dotted ${theme.accentColor};
    `};

  ${({ pointer }) =>
    pointer &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};
`;
