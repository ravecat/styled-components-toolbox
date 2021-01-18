import { styled, css, BaseComponent } from "common/styled";
import type { HTMLProps, HTMLAttributes } from "react";

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    HTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  dashed?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  label: string;
  link?: boolean;
  primary?: boolean;
  rounded?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = styled(BaseComponent).attrs<ButtonProps>(
  ({ children, label }) => ({
    children: [label, children],
    as: "button",
  })
)<ButtonProps>`
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  letter-spacing: normal;
  cursor: pointer;
  outline: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.neutralColor};
  border: 1px solid ${({ theme }) => theme.lightPrimaryColor};
  background: ${({ theme }) => theme.lightPrimaryColor};
  border-radius: 0;

  ${({ primary }) =>
    primary &&
    css`
      && {
        background: ${({ theme }) => theme.darkPrimaryColor};
        border: 1px solid ${({ theme }) => theme.darkPrimaryColor};
      }
    `};

  ${({ ghost }) =>
    ghost &&
    css`
      && {
        background: transparent;
        color: ${({ theme }) => theme.lightPrimaryColor};
      }
    `};

  ${({ dashed }) =>
    dashed &&
    css`
      && {
        background: ${({ theme }) => theme.neutralColor};
        border-color: ${({ theme }) => theme.dividerColor};
        border: 1px dashed ${({ theme }) => theme.lightPrimaryColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};

  ${({ rounded }) =>
    rounded &&
    css`
      && {
        border-radius: 4px;
      }
    `};

  ${({ block }) =>
    block &&
    css`
      && {
        display: inline-block;
        width: 100%;
        color: ${({ theme }) => theme.neutralColor};
      }
    `};

  ${({ link }) =>
    link &&
    css`
      && {
        background-color: transparent;
        border: 1px solid transparent;
        color: ${({ theme }) => theme.lightPrimaryColor};
        text-decoration: underline;
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      && {
        cursor: default;
        background: ${({ theme }) => theme.neutralColor};
        border-color: ${({ theme }) => theme.dividerColor};
        color: ${({ theme }) => theme.dividerColor};
      }
    `};
`;

// export const Button = styled(BaseComponent).attrs<ButtonProps>(
//   ({ children, label }) => ({
//     children: [label, children],
//     as: "button",
//   })
// )<ButtonProps>`
//   display: inline-block;
//   height: 32px;
//   padding: 0 15px;
//   line-height: 30px;
//   text-align: center;
//   letter-spacing: normal;
//   cursor: pointer;
//   outline: 0;
//   white-space: nowrap;
//   color: ${({ theme }) => theme.neutralColor};
//   border: 1px solid ${({ theme }) => theme.lightPrimaryColor};
//   background: ${({ theme }) => theme.lightPrimaryColor};
//   border-radius: 0;

//   ${({ primary }) =>
//     primary &&
//     css`
//       && {
//         background: ${({ theme }) => theme.darkPrimaryColor};
//         border: 1px solid ${({ theme }) => theme.darkPrimaryColor};
//       }
//     `};

//   ${({ ghost }) =>
//     ghost &&
//     css`
//       && {
//         background: transparent;
//         color: ${({ theme }) => theme.lightPrimaryColor};
//       }
//     `};

//   ${({ dashed }) =>
//     dashed &&
//     css`
//       && {
//         background: ${({ theme }) => theme.neutralColor};
//         border-color: ${({ theme }) => theme.dividerColor};
//         border: 1px dashed ${({ theme }) => theme.lightPrimaryColor};
//         color: ${({ theme }) => theme.dividerColor};
//       }
//     `};

//   ${({ rounded }) =>
//     rounded &&
//     css`
//       && {
//         border-radius: 4px;
//       }
//     `};

//   ${({ block }) =>
//     block &&
//     css`
//       && {
//         display: inline-block;
//         width: 100%;
//         color: ${({ theme }) => theme.neutralColor};
//       }
//     `};

//   ${({ link }) =>
//     link &&
//     css`
//       && {
//         background-color: transparent;
//         border: 1px solid transparent;
//         color: ${({ theme }) => theme.lightPrimaryColor};
//         text-decoration: underline;
//       }
//     `};

//   ${({ disabled }) =>
//     disabled &&
//     css`
//       && {
//         cursor: default;
//         background: ${({ theme }) => theme.neutralColor};
//         border-color: ${({ theme }) => theme.dividerColor};
//         color: ${({ theme }) => theme.dividerColor};
//       }
//     `};
// `;
