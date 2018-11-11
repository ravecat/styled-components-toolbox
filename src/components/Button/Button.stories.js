import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import { setDefaultStory } from "common/helpers";
import Button from "./index";
import * as readme from "./README.md";

setDefaultStory("Button", readme, () => (
  <Button
    disabled={boolean("disabled", false)}
    href={text("href")}
    onClick={action("clicked")}
  >
    {text("value", "Button")}
  </Button>
));
