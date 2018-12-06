import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import Button from "./index";

storiesOf("Button", module)
  .add("Default", () => (
    <Button
      disabled={boolean("disabled", false)}
      href={text("href")}
      onClick={action("clicked")}
    >
      {text("value", "Button")}
    </Button>
  ));
