import { Story } from "@storybook/react";
import React, { FC } from "react";

export const createTemplate = <T,>(Component: FC): Story<T> =>
  ((args) => <Component {...args} />).bind({});
