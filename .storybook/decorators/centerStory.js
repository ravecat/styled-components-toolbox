import React from "react";
import styled from "styled-components";

const centerStory = storyFn => <Wrapper>{storyFn()}</Wrapper>;

export default centerStory;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40%;
`;
