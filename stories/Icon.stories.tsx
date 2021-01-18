import { createTemplate } from "stories/utils/template";
import { createStory } from "stories/utils/story";
import { Icon } from "components/Icon";
import type { IconProps } from "components/Icon";

export default createStory<IconProps>({
  title: "Icon",
  component: Icon,
  exclude: ["isBackgroundURL", "ref", "theme", "forwardedAs", "as"],
  argTypes: {
    tag: {
      defaultValue: "span",
    },
  },
  args: {
    alt: "Icon",
    asset: "⚪",
    alternative: "\u26AB",
  },
});

export const Default = createTemplate<IconProps>(Icon);
