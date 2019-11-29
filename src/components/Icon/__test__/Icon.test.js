import React from "react";
import renderer from "react-test-renderer";

import Icon from "../index";

it("<Icon> renders correctly", () => {
  const tree = renderer.create(<Icon alt="icon" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Icon> renders correctly with condition", () => {
  const conditions = { asset: true, alternative: false };

  let tree = renderer
    .create(
      <Icon
        alternative={conditions.alternative}
        asset={conditions.asset}
        condition={conditions.asset}
      />
    )
    .toJSON();
  expect(tree.props.src).toBeFalsy();

  tree = renderer
    .create(
      <Icon
        alternative={conditions.alternative}
        asset={conditions.asset}
        condition={conditions.alternative}
      />
    )
    .toJSON();
  expect(tree.props.src).toBeTruthy();
});
