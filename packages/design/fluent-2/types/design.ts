import { BakaDesignCore } from "baka-core/types";

export interface BakaDesignFluent2 extends BakaDesignCore {
  ButtonVariant: "primary" | "secondary" | "outline" | "subtle" | "transparent" | "icon";
  ButtonState: {
    hovered?: boolean;
    focused?: boolean;
    activated?: boolean;
    disabled?: boolean;
    selected?: boolean;
  };
}
