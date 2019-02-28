import styled, { css } from "styled-components";
import { theme } from "common/theme";
import BaseComponent from "common/components/BaseComponent";

const Text = styled(BaseComponent).attrs({
  as: "span"
})`
  color: ${theme.primaryTextColor};
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `};
  ${({ bold }) => bold && css`
    font-weight: 700;
  `};
  ${({ underline }) => underline && css`
    text-decoration: underline;
  `};
  ${({ italic }) => italic && css`
    font-style: italic;
  `};
`;

export default Text
