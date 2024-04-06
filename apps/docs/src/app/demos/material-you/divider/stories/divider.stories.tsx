import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DividerStory, { DividerStoryProps, defaultProps } from "./page";

const meta: Meta = {
  title: "Material You/Divider",
  component: (props: DividerStoryProps) => <DividerStory {...props} />,
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
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
};
