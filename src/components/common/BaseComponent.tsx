import { ReactNode } from "react";
import { ThemeInterface } from "common/theme";
import styled, { theme } from "common/theme";

export interface BaseProps {
  theme: ThemeInterface;
  children?: ReactNode;
  as?: string;
}

const BaseComponent = styled.div<BaseProps>`
  margin: 0;
  padding: 0;
  box-sizing: ${theme.boxSizing};
  border: ${theme.border};
  vertical-align: ${theme.verticalAlign};
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  font-weight: ${theme.fontWeight};
  color: ${theme.primaryTextColor};
`;

export default BaseComponent;
