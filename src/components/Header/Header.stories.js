import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import Header from "./index";
import * as readme from "./README.md";

const DEFAULT_TAG = "h1";
const OPTIONS = ["h1", "h2", "h3", "h4", "h5", "h6"];

storiesOf("Header", module).add(
  "Default",
  withReadme(readme, () => (
    <Header
      tag={select("tag", OPTIONS, DEFAULT_TAG)}
      uppercase={boolean("uppecase", false)}
      bold={boolean("bold", false)}
    >
      {text("value", "Header")}
    </Header>
  ))
);
