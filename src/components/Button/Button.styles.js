import { css } from "styled-components";

export default css`
  height: 32px;
  padding: 0 15px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
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

  ${props =>
    props.disabled &&
    css`
      && {
        cursor: default;
        background: ${({ theme }) => theme.textColor};
        border-color: ${({ theme }) => theme.dividerColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};
`;
