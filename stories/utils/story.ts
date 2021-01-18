import type { Meta } from "@storybook/react";

type CustomMeta<T> = Meta<T> & { exclude: string[] };

export function createStory<T>({
  argTypes,
  exclude,
  ...rest
}: CustomMeta<T>): Meta<T> {
  return {
    ...rest,
    argTypes: {
      ...exclude.reduce(
        (acc, key) => ({ ...acc, [key]: { table: { disable: true } } }),
        {}
      ),
      ...argTypes,
    },
  };
}
