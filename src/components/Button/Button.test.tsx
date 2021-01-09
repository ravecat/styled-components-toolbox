import React from "react";
import renderer from "react-test-renderer";
import { Button } from "components/Button/Button";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button backgroundColor="fff" label="Test" primary />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
