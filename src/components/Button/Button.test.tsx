import React from "react";
import renderer from "react-test-renderer";

import { Button } from "./index";

it("<Button> renders correctly", () => {
  const tree = renderer.create(<Button label="Label" type="button" />).toJSON();
  expect(tree).toMatchSnapshot();
});
