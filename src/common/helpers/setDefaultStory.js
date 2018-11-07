import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

export default (title: string, readme: string, storyFn: any) =>
  storiesOf(title, module).add("Default", withReadme(readme, storyFn));
