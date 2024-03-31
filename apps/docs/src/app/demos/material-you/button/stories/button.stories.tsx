/// <reference types="baka-material-you" />

import React from "react";
import type { BakaDesign } from "baka-core";
import type { Meta, StoryObj } from "@storybook/react";
import ButtonStory, { ButtonStoryProps, defaultProps } from "./page";
import { BakaIcon } from "baka-ui";

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

export const IconButton: Story = {
  args: {
    toggleable: false,
    selected: false,
    variant: "icon",
    ...defaultProps,
    children: <BakaIcon>settings</BakaIcon>,
  },
  render: (props) => {
    const { toggleable, ...other } = props;

    return (
      <ButtonStory
        {...other}
        variant={
          [
            "icon",
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            toggleable ? "toggle" : null,
          ].filter(Boolean) as BakaDesign["ButtonVariant"][]
        }
      />
    );
  },
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        ["icon"]: "icon",
        ["+ filled"]: ["icon", "filled"],
        ["+ tonal"]: ["icon", "tonal"],
        ["+ outlined"]: ["icon", "outlined"],
      },
      options: ["icon", "+ filled", "+ tonal", "+ outlined"],
    },
    selected: { control: "boolean", if: { arg: "toggleable" } },
    toggleable: { control: "boolean" },
  },
};

export const TextAndIcon: Story = {
  render: (props: ButtonStoryProps & { icon?: string }) => {
    const { icon, children, ...other } = props;

    return (
      <ButtonStory {...other}>
        <BakaIcon>{icon}</BakaIcon>
        {children}
      </ButtonStory>
    );
  },
  args: {
    icon: "add",
    variant: "filled",
    ...defaultProps,
    children: "Label",
  },
};

export const FAB: Story = {
  render: ({ extended, ...props }) => {
    return (
      <ButtonStory
        {...props}
        variant={[
          ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
          ...(Array.isArray(props["variant (size)"])
            ? props["variant (size)"]
            : [props["variant (size)"]]),
          extended ? "extended" : null,
        ]}
      >
        {props.children} {extended && "Label"}
      </ButtonStory>
    );
  },
  args: {
    variant: "fab",
    ["variant (size)"]: "medium",
    extended: false,
    ...defaultProps,
    children: <BakaIcon>mode_edit</BakaIcon>,
  },
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        ["fab"]: "fab",
        ["+ primary"]: ["fab", "primary"],
        ["+ secondary"]: ["fab", "secondary"],
        ["+ tertiary"]: ["fab", "tertiary"],
      },
      options: ["fab", "+ primary", "+ secondary", "+ tertiary"],
    },
    ["variant (size)"]: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    extended: { control: "boolean" },
  },
};
