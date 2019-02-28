import styled, { css } from "styled-components";
import { theme } from "common/theme";
import Link from "components/Link";

const ButtonLink = styled(Link)`
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  letter-spacing: normal;
  cursor: pointer;
  color: ${theme.textColor};
  background: ${theme.primaryColor};
  border: 1px solid ${theme.primaryColor};
  border-radius: 0;

  :hover {
    background: ${theme.textColor};
    color: ${theme.primaryColor};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background: ${theme.textColor};
      border-color: ${theme.dividerColor};
      color: ${theme.dividerColor};
      pointer-events: none;
    `};
`;

export default ButtonLink;
