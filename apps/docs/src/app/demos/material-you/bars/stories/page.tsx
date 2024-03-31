import { BakaBadge, BakaBar, BakaBarProps, BakaButton, BakaIcon, BakaText } from "baka-ui";

export type BarStoryProps = BakaBarProps & {
  size?: "small" | "medium" | "large";
  position?: "top" | "bottom";
  elevated?: boolean;
  items?: number;
  fab?: boolean;
};
export const defaultProps: BarStoryProps = {
  position: "top",
  items: 3,
  fab: true,
  size: "medium",
  elevated: false,
};

export default function BarStory(props: BarStoryProps) {
  switch (props.position) {
    case "bottom":
      return (
        <BakaBar
          variant={"bottom"}
          style={{ width: 400, display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {["circle", "change_history", "rectangle", "pentagon", "hexagon"]
              .slice(0, props.items)
              .map((shape) => (
                <BakaButton variant={"icon"}>
                  <BakaIcon>{shape}</BakaIcon>
                </BakaButton>
              ))}
          </div>
          {props.fab ? (
            <BakaButton variant={["fab", "secondary"]}>
              <BakaIcon>add</BakaIcon>
            </BakaButton>
          ) : null}
        </BakaBar>
      );
    case "top":
    default:
      switch (props.size) {
        case "small":
          return (
            <BakaBar
              style={{ width: 404 }}
              variant={
                ["top", "small", props.elevated ? "elevated" : null].filter(
                  Boolean
                ) as BakaBarProps["variant"]
              }
            >
              <BakaButton variant={"icon"}>
                <BakaIcon>menu</BakaIcon>
              </BakaButton>
              <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
                Product
              </BakaText>
              <BakaButton variant={"icon"}>
                <BakaIcon variant={"filled"}>account_circle</BakaIcon>
              </BakaButton>
            </BakaBar>
          );
        case "medium":
          return (
            <BakaBar
              style={{ width: 404 }}
              variant={
                ["top", "medium", props.elevated ? "elevated" : null].filter(
                  Boolean
                ) as BakaBarProps["variant"]
              }
            >
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 1 }}>
                  <BakaButton variant={"icon"}>
                    <BakaIcon>arrow_back</BakaIcon>
                  </BakaButton>
                </div>
                <BakaButton variant={"icon"}>
                  <BakaIcon>attach_file</BakaIcon>
                </BakaButton>
                <BakaButton variant={"icon"}>
                  <BakaIcon>today</BakaIcon>
                </BakaButton>
                <BakaButton variant={"icon"}>
                  <BakaIcon>more_vert</BakaIcon>
                </BakaButton>
              </div>
              <div style={{ paddingInline: 16 }}>
                <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "left" }}>
                  Title
                </BakaText>
              </div>
            </BakaBar>
          );
        case "large":
          return (
            <BakaBar
              style={{ width: 404 }}
              variant={
                ["top", "large", props.elevated ? "elevated" : null].filter(
                  Boolean
                ) as BakaBarProps["variant"]
              }
            >
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 1 }}>
                  <BakaButton variant={"icon"}>
                    <BakaIcon>arrow_back</BakaIcon>
                  </BakaButton>
                </div>
                <BakaButton variant={"icon"}>
                  <BakaIcon>attach_file</BakaIcon>
                </BakaButton>
                <BakaButton variant={"icon"}>
                  <BakaIcon>today</BakaIcon>
                </BakaButton>
                <BakaButton variant={"icon"}>
                  <BakaIcon>more_vert</BakaIcon>
                </BakaButton>
              </div>
              <div style={{ paddingInline: 16 }}>
                <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "left" }}>
                  Title
                </BakaText>
              </div>
            </BakaBar>
          );
      }
  }
}
