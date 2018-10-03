import * as React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { setDefaultStory } from "common/helpers";
import Label from "./index";
import * as readme from "./README.md";

setDefaultStory("Label", readme, () => (
  <Label
    bold={boolean("bold", false)}
    labelFor={text("labelFor", "id")}
    uppercase={boolean("uppecase", false)}
  >
    {text("children", "Label")}
  </Label>
));
