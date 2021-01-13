import React from "react";
import styled from "styled-components";
import { defaultTheme } from "common/theme";

export type BaseProps = {
  children?: React.ReactNode;
};

export const BaseComponent = styled.div.attrs(({ theme }) => ({
  theme: { ...defaultTheme, ...theme },
}))`
  margin: 0;
  padding: 0;
  box-sizing: ${({ theme }) => theme.boxSizing};
  vertical-align: ${({ theme }) => theme.verticalAlign};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight};
  transition: all ease 0.3s;

  [hidden] {
    display: none !important;
  }
`;
