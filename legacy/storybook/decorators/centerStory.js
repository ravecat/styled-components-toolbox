// Use for centering story with preview-head.html
import React from "react";
import styled from "styled-components";

export default storyFn => <Wrapper>{storyFn()}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
