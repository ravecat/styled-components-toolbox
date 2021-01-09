import React from "react";
import renderer from "react-test-renderer";

import Label from "../index";

it("<Label> renders correctly", () => {
  const tree = renderer.create(<Label labelFor={"test"}>Label</Label>).toJSON();
  expect(tree).toMatchSnapshot();
});
