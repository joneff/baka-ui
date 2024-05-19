import { BakaDesignCore } from "baka-core/types";

export interface BakaDesignFluent2 extends BakaDesignCore {
  BadgeVariant:
    | "circular"
    | "filled"
    | "tint"
    | "outline"
    | "subtle"
    | "color-brand"
    | "color-danger"
    | "color-warning"
    | "color-success"
    | "color-important"
    | "color-informative"
    | "color-subtle";
  ButtonVariant: "primary" | "secondary" | "outline" | "subtle" | "transparent" | "icon";
  ButtonState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    selected?: boolean;
  };
  TextVariant:
    | "caption-1"
    | "caption-1-strong"
    | "caption-2"
    | "caption-2-strong"
    | "body-1"
    | "body-1-strong"
    | "body-2"
    | "subtitle-1"
    | "subtitle-1-stronger"
    | "subtitle-2"
    | "subtitle-2-stronger"
    | "title-3"
    | "title-2"
    | "title-1"
    | "large-title"
    | "display";

  ListItemState: {
    focused?: boolean;
  };
}
