import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import Icon from "./index";
import * as readme from "./README.md";

const ASSET =
  "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/high_volume-512.png";
const ALTERNATIVE =
  "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/mute-512.png";
const sizeOptions = { range: true, min: 30, max: 120, step: 5 };

storiesOf("Icon", module).add(
  "Default",
  withReadme(readme, () => (
    <Icon
      alt={text("alt")}
      alternative={text("alternative", ALTERNATIVE)}
      asset={text("asset", ASSET)}
      condition={boolean("condition", false)}
      fill={boolean("fill", false)}
      height={number("height", 30, sizeOptions)}
      width={number("width", 30, sizeOptions)}
    />
  ))
);
