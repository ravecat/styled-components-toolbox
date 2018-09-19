import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import Button from "./index";
import * as readme from "./README.md";

storiesOf("Button", module).add(
  "Default",
  withReadme(readme, () => (
    <Button
      disabled={boolean("disabled", false)}
      href={text("href")}
      onClick={action("clicked")}
    >
      {text("value", "Button")}
    </Button>
  ))
);
