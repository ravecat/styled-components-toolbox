import React from "react";
import styled from "styled-components";
import BaseComponent from "common/components/BaseComponent";

const Timestamp = ({ date, className }) => 
  <Wrapper className={className}>
    {date}
  </Wrapper>

export default Timestamp

const Wrapper = styled(BaseComponent).attrs({
  as: "span"
})`
  color: ${({ theme }) => theme.primaryTextColor}
`;
