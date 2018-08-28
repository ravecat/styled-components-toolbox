import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import buttonStyles from "./Button.styles";

const ButtonLink = ({ children, ...rest }) => (
  // Use custom A link instead Wrapper
  <Wrapper target="_blank" {...rest}>
    <Span>{children}</Span>
  </Wrapper>
);

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ButtonLink;

const Wrapper = styled.a`
  display: table;
  ${buttonStyles};
`;

const Span = styled.span`
  display: table-cell;
  vertical-align: middle;
`;
