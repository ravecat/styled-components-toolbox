import styled, { css } from "styled-components";

import BaseComponent from "common/components/BaseComponent";

const Label = styled(BaseComponent).attrs(({ labelFor }) => ({
  for: labelFor,
  as: "label"
}))`
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
`;

export default Label;
