import styled, { css } from "styled-components";
import BaseComponent from "common/components/BaseComponent";

const Header = styled(BaseComponent).attrs(({ tag = "h1" }) => ({
  as: tag
}))`
  color: ${({ theme }) => theme.primaryTextColor};
  ${({ uppercase }) => uppercase && css`
      text-transform: uppercase;
    `};
  ${({ bold }) => bold && css`
      font-weight: 700;
    `};
`;

export default Header
