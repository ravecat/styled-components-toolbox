import styled from "styled-components";

import { theme } from "common/theme";
import BaseComponent from "components/BaseComponent";

const Text = styled(BaseComponent).attrs({
  as: "span"
})`
  color: ${theme.primaryTextColor};
  font-size: ${({ size }) => size}px;
  font-style: ${({ italic }) => italic && `italic`};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  line-height: ${({ lheight }) => lheight || theme.lineHeight};
  font-weight: ${({ bold }) => bold && `700`};
  text-decoration: ${({ underline }) => underline && `underline`};
`;

export default Text;
