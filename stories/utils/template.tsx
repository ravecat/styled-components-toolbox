import { Story } from "@storybook/react";
import React from "react";

export const createTemplate = <T,>(Component: React.FC): Story<T> => {
  const Template: Story<T> = (args) => <Component {...args} />;

  return Template.bind({});
};
