import type { BakaDesignFluent2 } from "./design";

declare module "baka-core" {
  export interface BakaDesign extends BakaDesignFluent2 {}
}
