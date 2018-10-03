import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeInterface } from "common/theme";
import Mixin from "common/Mixin";

interface LabelProps {
  children?: ReactNode;
  theme: ThemeInterface;
  labelFor?: string;
  uppercase?: boolean;
  bold?: boolean;
}

export default styled.label.attrs<LabelProps>({
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
`;
