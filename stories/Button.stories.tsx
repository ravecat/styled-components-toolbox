import { createTemplate } from "stories/utils/template";
import { createStory } from "stories/utils/story";
import { Button } from "components/Button";
import type { ButtonProps } from "components/Button";

export default createStory<ButtonProps>({
  title: "Button",
  component: Button,
  exclude: ["ref", "theme", "forwardedAs", "as"],
  args: {
    label: "Label",
  },
});

export const Default = createTemplate<ButtonProps>(Button);
