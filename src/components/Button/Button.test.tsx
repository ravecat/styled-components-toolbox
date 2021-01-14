import React from "react";
import renderer from "react-test-renderer";

import { Button } from "./index";

it("<Button> renders correctly", () => {
  const tree = renderer.create(<Button>Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
