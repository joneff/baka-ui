import { BakaButton, BakaText, BakaTooltip } from "baka-ui";

export type TooltipStoryProps = {
  variant: string;
  text: string;
  buttons: boolean;
};

export const defaultProps = {
  variant: "plain",
  buttons: true,
  text: "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
};

export default function TooltipStory(props: TooltipStoryProps) {
  const args = { ...defaultProps, ...props };

  switch (args.variant) {
    default:
    case "plain":
      console.log("here");
      return (
        <BakaTooltip style={{ maxWidth: 316 }} variant={"plain"}>
          {args.text}
        </BakaTooltip>
      );
    case "rich":
      return (
        <BakaTooltip style={{ maxWidth: 316 }} variant={"rich"}>
          <div
            style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            <BakaText variant={"title-small"}>Title</BakaText>
            <BakaText variant={["body-medium", "variant"]}>{args.text}</BakaText>
          </div>
          {args.buttons ? (
            <div style={{ padding: "0 8px", display: "flex", gap: 8 }}>
              <BakaButton>Action</BakaButton>
              <BakaButton>Action</BakaButton>
            </div>
          ) : null}
        </BakaTooltip>
      );
  }
}
