import { BakaIcon, BakaIconProps } from "baka-ui";
import icons from "./icons.json";

export type IconStoryProps = {
  icon: (typeof icons)[number];
  filled: boolean;
  variant: "primary" | "error";
  size: "small" | "medium" | "large";
};

export const defaultProps = {
  icon: "person",
  filled: false,
  variant: null,
  size: "medium",
};

export default function IconStory(props: IconStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <BakaIcon
      variant={[args.variant, args.size, args.filled ? "filled" : null].filter(Boolean) as BakaIconProps["variant"]}
    >
      {args.icon}
    </BakaIcon>
  );
}
