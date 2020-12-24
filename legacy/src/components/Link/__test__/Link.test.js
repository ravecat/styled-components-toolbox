import React from "react";
import renderer from "react-test-renderer";

import Link from "../index";

it("<Link> renders correctly", () => {
  const tree = renderer.create(<Link>Link</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});
