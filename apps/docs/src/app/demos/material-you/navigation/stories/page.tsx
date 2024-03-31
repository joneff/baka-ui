import {
  BakaBadge,
  BakaButton,
  BakaDivider,
  BakaIcon,
  BakaNavigation,
  BakaNavigationItem,
  BakaNavigationProps,
  BakaText,
} from "baka-ui";

export type NavigationStoryProps = BakaNavigationProps & {
  type: "side" | "bottom" | "rail";
  labels: boolean;
  items: number;
  icons: boolean;
  align: "top" | "center" | "bottom";
};
export const defaultProps: NavigationStoryProps = {
  type: "bottom",
  labels: true,
  icons: true,
  items: 3,
  align: "top",
};
export default function NavigationStory(props: NavigationStoryProps) {
  const { type, labels, items, icons, align, ...other } = props;

  switch (type) {
    case "side":
      return (
        <BakaNavigation variant={"side"} style={{ width: 300 }}>
          <div style={{ padding: "18px 16px" }}>
            <BakaText variant={"title-small"}>Title</BakaText>
          </div>
          <div style={{ padding: "18px 16px" }}>
            <BakaText variant={"title-small"}>Section header</BakaText>
          </div>
          <BakaNavigationItem selected={true}>
            {icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText variant={"label-medium"}>Label</BakaText>
            <BakaText variant={"label-medium"}>100+</BakaText>
          </BakaNavigationItem>
          <BakaNavigationItem>
            {icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText variant={"label-medium"}>Label</BakaText>
            <BakaText variant={"label-medium"}>100+</BakaText>
          </BakaNavigationItem>
          <BakaNavigationItem>
            {icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText variant={"label-medium"}>Label</BakaText>
            <BakaText variant={"label-medium"}>100+</BakaText>
          </BakaNavigationItem>
          <BakaDivider />
          <div style={{ padding: "18px 16px" }}>
            <BakaText variant={"title-small"}>Section header</BakaText>
          </div>
          <BakaNavigationItem>
            {icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText variant={"label-medium"}>Label</BakaText>
          </BakaNavigationItem>
          <BakaNavigationItem>
            {icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText variant={"label-medium"}>Label</BakaText>
          </BakaNavigationItem>
          <BakaNavigationItem>
            {icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText variant={"label-medium"}>Label</BakaText>
          </BakaNavigationItem>
        </BakaNavigation>
      );
    case "bottom":
    default:
      return (
        <BakaNavigation variant={"bottom"} style={{ width: 400 }}>
          <BakaNavigationItem selected={true}>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            {labels ? <BakaText variant={"label-medium"}>Label</BakaText> : null}
          </BakaNavigationItem>
          {Array.from({ length: items - 2 }, (_, i) => (
            <BakaNavigationItem key={i}>
              <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
              {labels ? <BakaText variant={"label-medium"}>Label</BakaText> : null}
            </BakaNavigationItem>
          ))}
          <BakaNavigationItem>
            <BakaIcon variant={"filled"}>
              fiber_manual_record
              {labels ? (
                <BakaBadge
                  variant={"single-digit"}
                  style={{ position: "absolute", right: 16, top: 2 }}
                >
                  3
                </BakaBadge>
              ) : (
                <BakaBadge variant={"small"} style={{ position: "absolute", right: 16, top: 2 }} />
              )}
            </BakaIcon>
            {labels ? <BakaText variant={"label-medium"}>Label</BakaText> : null}
          </BakaNavigationItem>
        </BakaNavigation>
      );
    case "rail":
      return (
        <BakaNavigation variant={"rail"} style={{ height: "calc(100vh - 100px)" }}>
          <div
            style={{
              display: "flex",
              gap: 4,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "stretch",
            }}
          >
            <BakaButton variant="icon">
              <BakaIcon>menu</BakaIcon>
            </BakaButton>
            {
              <BakaButton variant={["fab", "tertiary"]}>
                <BakaIcon>mode_edit</BakaIcon>
              </BakaButton>
            }
          </div>
          <div
            style={
              align === "center"
                ? { margin: "auto" }
                : align === "bottom"
                ? { marginTop: "auto" }
                : {}
            }
          >
            <BakaNavigationItem selected={true}>
              <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
              {labels ? <BakaText>BakaText</BakaText> : null}
            </BakaNavigationItem>
            <BakaNavigationItem>
              <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            </BakaNavigationItem>
            <BakaNavigationItem>
              <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            </BakaNavigationItem>
            <BakaNavigationItem>
              <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            </BakaNavigationItem>
          </div>
        </BakaNavigation>
      );
  }
}
