import type {
  AnyStyledComponent,
  IntrinsicElementsKeys,
  ThemedStyledFunction,
  ThemedCssFunction,
} from "styled-components";
import type { ComponentType } from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "common/theme";

type DefaultTheme = typeof defaultTheme;

interface StyledFunctionParams<
  Component extends
    | IntrinsicElementsKeys
    | AnyStyledComponent
    | ComponentType<any>,
  Theme extends Record<string, unknown>,
  Props extends Record<string, unknown>
> {
  tag: Component;
  attrs: ThemedStyledFunction<Component, Theme, Props>["attrs"];
}

type Styled = <
  Component extends
    | IntrinsicElementsKeys
    | AnyStyledComponent
    | ComponentType<any>,
  Props extends Record<string, unknown>
>(
  params: StyledFunctionParams<Component, DefaultTheme, Props>
) => ThemedCssFunction<DefaultTheme>;

export const customStyled: Styled = ({ tag, attrs }) => (
  styles,
  ...interpolations
) => {
  const extendedAttrs = ({ theme, ...rest }) => ({
    theme: { ...defaultTheme, ...theme },
    ...attrs({ theme, ...rest }),
  });

  const rules = css(styles, ...interpolations);

  return styled(tag).attrs(extendedAttrs)`
    color: red;
    ${rules}
  `;
};
