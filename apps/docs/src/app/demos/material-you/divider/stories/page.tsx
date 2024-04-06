import { BakaDivider, BakaDividerProps } from "baka-ui";

export type DividerStoryProps = BakaDividerProps & {
  orientation?: "horizontal" | "vertical";
};

export const defaultProps: DividerStoryProps = {
  orientation: "horizontal",
};

export default function DividerStoryDemo(props: DividerStoryProps) {
  const args = { ...defaultProps, ...props };

  return args.orientation === "horizontal" ? (
    <BakaDivider style={{ width: 300 }} />
  ) : (
    <BakaDivider style={{ width: 1, height: 300 }} />
  );
}
