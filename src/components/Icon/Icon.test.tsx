import React from "react";
import renderer from "react-test-renderer";

import { Icon } from "./index";

it("<Icon> renders correctly", () => {
  const tree = renderer.create(<Icon alt="icon" asset="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
