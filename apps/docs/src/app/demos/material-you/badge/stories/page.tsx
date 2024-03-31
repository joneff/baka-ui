import { BakaBadge, BakaBadgeProps } from "baka-ui";

export type BadgeStoryProps = BakaBadgeProps & {};
export const defaultProps: BadgeStoryProps = {
  variant: "single-digit",
};

export default function BadgeStory(props: BadgeStoryProps) {
  switch (props.variant) {
    case "small":
      return <BakaBadge {...props} />;
    case "multi-digit":
      return <BakaBadge {...props}>99+</BakaBadge>;
    case "single-digit":
    default:
      return <BakaBadge {...props}>3</BakaBadge>;
  }
}
