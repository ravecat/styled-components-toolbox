import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import buttonStyles from "./Button.styles";

const Button = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <span>{children}</span>
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Button;

const Wrapper = styled.button`
  display: inline-block;
  ${buttonStyles};
`;
