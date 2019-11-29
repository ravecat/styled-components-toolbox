import * as React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Text from "./index";

storiesOf("Text", module).add("Default", () => (
  <Text
    bold={boolean("bold", false)}
    italic={boolean("italic", false)}
    lheight={select("lheight", [0.5, 1, 1.5, 2], 1)}
    size={select("size", [6, 10, 14, 18, 22, 26], 14)}
    underline={boolean("underline", false)}
    uppercase={boolean("uppecase", false)}
  >
    {text("children", "Text")}
  </Text>
));
