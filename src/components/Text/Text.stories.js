import * as React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Text from "./index";

storiesOf("Text", module)
  .add("Default", () => (
    <Text
      bold={boolean("bold", false)}
      italic={boolean("italic", false)}
      underline={boolean("underline", false)}
      uppercase={boolean("uppecase", false)}
    >
      {text("children", "Text")}
    </Text>
  ));
