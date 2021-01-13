import { Meta } from "@storybook/react";
import { createTemplate } from "stories/utils/template";
import { Button } from "components/Button";
import { ButtonProps } from "components/Button";

const story: Meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Label",
  },
};

export default story;

export const Default = createTemplate<ButtonProps>(Button);
