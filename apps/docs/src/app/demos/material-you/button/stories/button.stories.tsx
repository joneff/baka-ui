/// <reference types="baka-material-you" />

import React from "react";
import type { BakaDesign } from "baka-core";
import type { Meta, StoryObj } from "@storybook/react";
import ButtonStory, { ButtonStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["ButtonVariant"][] = [
  "filled",
  "outlined",
  "text",
  "elevated",
  "tonal",
];

const meta: Meta = {
  title: "Material You/Button",
  component: (props: ButtonStoryProps) => <ButtonStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
    variant: "filled",
    ...defaultProps,
  },
};
