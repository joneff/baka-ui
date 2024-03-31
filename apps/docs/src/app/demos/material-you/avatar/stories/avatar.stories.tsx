/// <reference types="baka-material-you" />

import React from "react";
import type { BakaDesign } from "baka-core";
import type { Meta, StoryObj } from "@storybook/react";
import AvatarStory, { AvatarStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["AvatarVariant"][] = ["small", "medium"];

const meta: Meta = {
  title: "Material You/Avatar",
  component: (props: AvatarStoryProps) => <AvatarStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["letter", "icon", "image"],
    },
    variant: {
      control: "radio",
      options: variantOptions,
    },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    variant: "medium",
    ...defaultProps,
  },
};
