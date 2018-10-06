import React from "react";
import renderer from "react-test-renderer";
import Timestamp from ".";

it("<Timestamp> renders correctly with Date object", () => {
  const date = new Date(2011, 9, 9, 14, 48, 59);
  const tree = renderer.create(<Timestamp value={date} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Timestamp> renders correctly with ISO8061 string", () => {
  const tree = renderer
    .create(<Timestamp value={"2011-10-09T14:48:59"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Timestamp> renders correctly with ISO8061 string and 'YBt' mask", () => {
  const tree = renderer
    .create(<Timestamp mask={"YBt"} value={"2011-10-09T14:48:59"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<Timestamp> renders correctly with Date object and 'YBt' mask", () => {
  const date = new Date(2011, 9, 9, 14, 48, 59);
  const tree = renderer
    .create(<Timestamp mask={"YBt"} value={date} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
