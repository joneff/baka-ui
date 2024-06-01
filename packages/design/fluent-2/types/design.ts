import { BakaDesignCore } from "baka-core/types";

export interface BakaDesignFluent2 extends BakaDesignCore {
  AvatarVariant:
    | "size-16"
    | "size-20"
    | "size-24"
    | "size-28"
    | "size-32"
    | "size-40"
    | "size-48"
    | "size-56"
    | "size-64"
    | "size-72"
    | "size-96"
    | "size-120"
    | "neutral"
    | "brand"
    | "darkred"
    | "cranberry"
    | "red"
    | "pumpkin"
    | "peach"
    | "marigold"
    | "gold"
    | "brass"
    | "brown"
    | "forest"
    | "seafoam"
    | "darkgreen"
    | "lightteal"
    | "teal"
    | "steel"
    | "blue"
    | "royalroyal"
    | "cornflower"
    | "navy"
    | "lavender"
    | "purple"
    | "grape"
    | "lilac"
    | "pink"
    | "magenta"
    | "plum"
    | "beige"
    | "mink"
    | "platinum"
    | "anchor";
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
  CardVariant: "filled" | "filled-alt" | "outline" | "subtle";
  CardState: {
    activated?: boolean;
    hovered?: boolean;
    selected?: boolean;
  };
  CheckboxState: {
    activated?: boolean;
    hovered?: boolean;
    focused?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
  };
  CheckboxVariant: "circular";
  TextState: {
    disabled?: boolean;
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
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

  IconVariant: "size-12" | "size-16" | "size-20" | "size-24" | "size-28" | "size-32" | "size-48";
}
