import React from "react";
import { styled, BaseComponent } from "common/styled";
import type { HTMLProps, HTMLAttributes } from "react";

export interface CollapseProps
  extends HTMLProps<HTMLDetailsElement>,
    HTMLAttributes<HTMLDetailsElement> {
  summary?: string;
}

// const iconStyles = css`
//   width: 10px;
//   height: 14px;
//   float: right;
//   background-position: center;
//   background-size: 10px 14px;
//   background-repeat: no-repeat;
//   content: "";
// `;

// const Details = styled(BaseComponent)`
//   width: 100%;
//   text-align: left;
//   border: none;
//   outline: none;

//   ${({ details }) =>
//     details &&
//     `
//     & ${Summary}:after {
//       ${iconStyles};
//       background-image: url(${downArrow});
//     }

//     &[open] ${Summary}:after {
//       ${iconStyles};
//       transform: rotate(180deg);
//     }
//   `};
// `;

const Summary = styled.summary`
  padding: 5px;
  color: ${({ theme }) => theme.neutralColor};
  background-color: ${({ theme }) => theme.lightPrimaryColor};
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

// const Content = styled.div`
//   padding: ${theme.padding};
// `;

export const Collapse = styled(BaseComponent).attrs<CollapseProps>(
  ({ children }) => ({
    as: "details",
  })
)<CollapseProps>`
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
`;

// export const LCollapse = ({ children, summary, details, className }) => (
//   <Details as="details" className={className} details={details}>
//     <Summary>{summary}</Summary>
//     <Content>{children}</Content>
//   </Details>
// );
