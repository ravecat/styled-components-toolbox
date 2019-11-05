import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Label from "./index";

storiesOf("Label", module).add("Default", () => (
  <Label
    bold={boolean("bold", false)}
    labelFor={text("labelFor", "id")}
    uppercase={boolean("uppecase", false)}
  >
    {text("children", "Label")}
  </Label>
));
