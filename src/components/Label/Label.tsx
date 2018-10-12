import * as React from "react";
import styled, { css } from "common/theme";
import BaseComponent, { BaseProps } from "common/components/BaseComponent";

interface LabelProps extends BaseProps {
  for?: string;
  uppercase?: boolean;
  bold?: boolean;
}

const Label = styled<LabelProps>(({ children, ...rest }) => (
  <BaseComponent as="label" {...rest}>
    {children}
  </BaseComponent>
)).attrs({
  for: ({ labelFor }) => labelFor
})<LabelProps>`
  ${({ uppercase }) =>
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

export default Label;
