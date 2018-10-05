import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/Mixin";

interface TextProps {
  children?: ReactNode;
  theme: ThemeInterface;
  uppercase?: boolean;
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
}

export default styled.label.attrs<TextProps>({
  for: ({ labelFor }) => labelFor
})`
  color: ${({ theme }) => theme.primaryTextColor};
  ${Mixin.setThemeFont()} ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `};
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `};
`;
