import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LayoutStory, { LayoutStoryProps, defaultProps } from "./page";

const meta: Meta = {
  title: "Material You/Layout",
  component: (props: LayoutStoryProps) => <LayoutStory {...props} />,
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
    region: {
      control: 'boolean'
    },
    columns: {
      control: {
        type: "range",
        min: 1,
        max: 12,
      },
    },
    size: {
      control: {
        type: "range",
        min: 1,
        max: 12,
      },
      if: {
        arg: "autosize",
        eq: false,
      },
    },
  },
};
