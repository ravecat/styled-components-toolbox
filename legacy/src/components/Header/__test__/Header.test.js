import React from "react";
import renderer from "react-test-renderer";

import Header from "../index";

it("<Header> renders correctly", () => {
  const tree = renderer.create(<Header>Header</Header>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Header> renders correctly as 'h3' tag", () => {
  const tree = renderer.create(<Header tag={"h3"}>Header</Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
