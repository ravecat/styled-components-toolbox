import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

export default (title, readme, Component) =>
  storiesOf(title, module).add("Default", withReadme(readme, () => Component));
