import * as React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { setDefaultStory } from "common/helpers";
import Text from "./index";
import * as readme from "./README.md";

setDefaultStory("Text", readme, () => (
  <Text
    bold={boolean("bold", false)}
    italic={boolean("italic", false)}
    underline={boolean("underline", false)}
    uppercase={boolean("uppecase", false)}
  >
    {text("children", "Text")}
  </Text>
));
