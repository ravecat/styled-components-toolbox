import { Meta } from "@storybook/react";
import { createTemplate } from "utils/storybook/template";
import { Button as Component, ButtonProps as Props } from "Button/Button";

const story: Meta = {
  title: Component.name,
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "Label",
  },
};

export default story;

export const Default = createTemplate<Props>(Component);
