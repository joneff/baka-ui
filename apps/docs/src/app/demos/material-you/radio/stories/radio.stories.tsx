import React from "react";
import type { BakaDesign } from "baka-core";
import type { Meta, StoryObj } from "@storybook/react";
import RadioStory, { RadioStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["RadioVariant"][] = [];

const meta: Meta = {
  title: "Material You/Radio",
  component: (props: RadioStoryProps) => <RadioStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    ...defaultProps,
  },
  argTypes: {},
};
