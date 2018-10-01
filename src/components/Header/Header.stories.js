import * as React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { setDefaultStory } from "common/helpers";
import Header from "./index";
import * as readme from "./README.md";

const DEFAULT_TAG = "h1";
const OPTIONS = ["h1", "h2", "h3", "h4", "h5", "h6"];

setDefaultStory(
  "Header",
  readme,
  <Header
    bold={boolean("bold", false)}
    tag={select("tag", OPTIONS, DEFAULT_TAG)}
    uppercase={boolean("uppecase", false)}
  >
    {text("value", "Header")}
  </Header>
);
