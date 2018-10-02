import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

export default (title, readme, storyFn) =>
  storiesOf(title, module).add("Default", withReadme(readme, storyFn));
