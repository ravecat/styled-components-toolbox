import React from "react";
import styled from "styled-components";

export default function Accordion({ className, children }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;

  details {
    margin-bottom: 2px;
  }
`;
