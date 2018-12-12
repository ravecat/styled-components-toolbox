import React from "react";
import renderer from "react-test-renderer";
import Button from "../index";

it("<Button> renders correctly", () => {
  const tree = renderer.create(<Button>Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Button> renders correctly as link", () => {
  const tree = renderer
    .create(<Button href="http://example.com">Button</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Button> renders correctly as disabled button", () => {
  const tree = renderer.create(<Button disabled>Button</Button>).toJSON();

  expect(tree.props.disabled).toBeTruthy();
});
