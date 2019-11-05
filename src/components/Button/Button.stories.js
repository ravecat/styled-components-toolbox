import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import Button from "./index";

storiesOf("Button", module).add("Default", () => (
  <Button
    block={boolean("block", false)}
    dashed={boolean("dashed", false)}
    disabled={boolean("disabled", false)}
    ghost={boolean("ghost", false)}
    href={text("href")}
    icon={text("icon")}
    link={boolean("link", false)}
    onClick={action("clicked")}
    primary={boolean("primary", false)}
    rounded={boolean("rounded", false)}
  >
    {text("value", "Button")}
  </Button>
));
