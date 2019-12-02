import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import { Collapse } from "./index";

const CONTENT = `The chemical compound isobutyl acetate, also known
as 2-methylpropyl ethanoate (IUPAC name) or β-methylpropyl acetate.`;

storiesOf("Collapse", module).add("Default", () => (
  <Collapse
    details={boolean("details", false)}
    summary={text("summary", "Summary")}
  >
    {text("children", CONTENT)}
  </Collapse>
));
