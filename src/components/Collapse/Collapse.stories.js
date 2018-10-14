import * as React from "react";
import { text } from "@storybook/addon-knobs";
import { setDefaultStory } from "common/helpers";
import Collapse from "./index";
import * as readme from "./README.md";

const CONTENT = `The chemical compound isobutyl acetate, also known as 2-methylpropyl ethanoate (IUPAC name) or β-methylpropyl acetate.`;

setDefaultStory("Collapse", readme, () => (
  <Collapse header={text("header", "Collapse")}>
    {text("children", CONTENT)}
  </Collapse>
));
