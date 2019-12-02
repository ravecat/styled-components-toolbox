import React from "react";
import styled, { css } from "styled-components";

import { theme } from "common/theme";
import BaseComponent from "components/BaseComponent";
import downArrow from "common/assets/down-arrow.svg";

export const Collapse = ({ children, summary, details }) => (
  <Details as="details" details={details}>
    <Summary>{summary}</Summary>
    <Content>{children}</Content>
  </Details>
);

const iconStyles = css`
  width: 10px;
  height: 14px;
  float: right;
  background-position: center;
  background-size: 10px 14px;
  background-repeat: no-repeat;
  content: "";
`;

const Details = styled(BaseComponent)`
  width: 100%;
  text-align: left;
  border: none;
  outline: none;

  ${({ details }) =>
    details &&
    `
    & ${Summary}:after {
      ${iconStyles};
      background-image: url(${downArrow});
    }

    &[open] ${Summary}:after {
      ${iconStyles};
      transform: rotate(180deg);
    }
  `};
`;

const Summary = styled.summary`
  padding: ${theme.padding};
  color: ${theme.textColor};
  background-color: ${theme.primaryColor};
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

const Content = styled.div`
  padding: ${theme.padding};
`;
