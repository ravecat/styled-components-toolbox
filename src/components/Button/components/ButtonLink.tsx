import styled, { css } from "common/theme";
import Link from "components/Link";
import { BaseProps } from "common/components/BaseComponent";

interface ButtonLinkProps extends BaseProps {
  disabled?: boolean;
}

const ButtonLink = styled(Link)<ButtonLinkProps>`
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  letter-spacing: normal;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0;

  :hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.primaryColor};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background: ${({ theme }) => theme.textColor};
      border-color: ${({ theme }) => theme.dividerColor};
      color: ${({ theme }) => theme.dividerColor};
      pointer-events: none;
    `};
`;

export default ButtonLink;
