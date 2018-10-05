import React from "react";
import renderer from "react-test-renderer";
import Text from ".";

it("<Text> renders correctly", () => {
  const tree = renderer
    .create(
      <Text bold italic underline uppercase>
        Text
      </Text>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
