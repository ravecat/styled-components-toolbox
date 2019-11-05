import styled from "styled-components";
import { theme } from "common/theme";
import BaseComponent from "common/components/BaseComponent";

const Header = styled(BaseComponent).attrs(({ tag = "h1" }) => ({
  as: tag
}))`
  color: ${theme.primaryTextColor};
  font-size: ${({ size }) => size}px;
  font-style: ${({ italic }) => italic && `italic`};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  line-height: ${({ lheight }) => lheight || theme.lineHeight};
  font-weight: ${({ bold }) => bold && `700`};
  text-decoration: ${({ underline }) => underline && `underline`};
`;

export default Header;
