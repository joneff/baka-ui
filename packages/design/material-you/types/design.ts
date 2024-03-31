import { BakaDesignCore } from "baka-core/types";

export interface BakaDesignMaterialYou extends BakaDesignCore {
  AvatarVariant: "small" | "medium" | "large";
  BadgeVariant: "small" | "single-digit" | "multi-digit";
  BarVariant: "top" | "bottom" | "small" | "medium" | "large" | "elevated";
  ButtonState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    selected?: boolean;
  };
  ButtonVariant:
    | "filled"
    | "outlined"
    | "text"
    | "elevated"
    | "tonal"
    | "icon"
    | "toggle"
    | "fab"
    | "primary"
    | "secondary"
    | "tertiary"
    | "small"
    | "medium"
    | "large"
    | "extended";

  CheckboxState: {
    checked?: boolean;
    indeterminate?: boolean;
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };
  CheckboxVariant: "primary" | "error";
  BottomSheetVariant: "modal";
  ChipState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    dragged?: boolean;
    selected?: boolean;
  };
  ChipVariant: "elevated";
  CardVariant: "outlined" | "elevated" | "filled" | "horizontal";
  DialogVariant: "basic" | "full-screen";
  TextVariant:
    | "display-large"
    | "display-medium"
    | "display-small"
    | "headline-large"
    | "headline-medium"
    | "headline-small"
    | "title-large"
    | "title-medium"
    | "title-small"
    | "label-large"
    | "label-medium"
    | "label-small"
    | "body-large"
    | "body-medium"
    | "body-small";
  ListItemVariant: "multi-line" | "video";
  IconVariant: "primary" | "small" | "medium" | "large" | "filled" | "error";
  SwitchVariant: "icon";
  ContainerVariant: "contained" | "fluid";
  ColumnVariant: "region-left" | "region-right";

  TextFieldState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    invalid?: boolean;
  };
  TextFieldVariant: "filled" | "outlined" | "search";
  InputState: {
    empty?: boolean;
  };
  TabGroupVariant: "primary" | "secondary" | "overflow";
  TabState: {
    selected?: boolean;
  };
  TooltipVariant: "rich" | "plain";

  NavigationVariant: "bottom" | "rail" | "side";
  NavigationItemState: {
    selected?: boolean;
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
  };
}
