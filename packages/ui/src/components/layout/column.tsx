import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaVariant, PolymorphicComponent } from "../../../src/models";
import { variantClassNames } from "../../utils";
import { valueClassNames } from "../../utils/value-class-names";

export type BakaColumnProps = BakaVariant<BakaDesign["ColumnVariant"]> & {
  size?: number | Array<number | null>;
};

export type BakaColumn = PolymorphicComponent<"div", BakaColumnProps>;
export const BakaColumn: BakaColumn = (props) => {
  const { _ref,
    as: Component = "div", size, variant, ...other } = props;

  return (
    <Component
      ref={_ref}
      {...other}
      className={clsx(
        "baka-column",
        props.className,
        variantClassNames(variant),
        valueClassNames(size)
      )}
    />
  );
};
