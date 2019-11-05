import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Header from "./index";

const DEFAULT_TAG = "h1";
const OPTIONS = ["h1", "h2", "h3", "h4", "h5", "h6"];

storiesOf("Header", module).add("Default", () => (
  <Header
    bold={boolean("bold", false)}
    italic={boolean("italic", false)}
    lheight={select("lheight", [0.5, 1, 1.5, 2], 1)}
    size={select("size", [6, 10, 14, 18, 22, 26], 14)}
    tag={select("tag", OPTIONS, DEFAULT_TAG)}
    underline={boolean("underline", false)}
    uppercase={boolean("uppecase", false)}
  >
    {text("value", "Header")}
  </Header>
));
