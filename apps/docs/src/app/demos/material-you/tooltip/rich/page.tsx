import { BakaButton, BakaText, BakaTooltip } from "baka-ui";

export default function RichTooltipDemo() {
  return (
    <div style={{ display: "grid", gridRowGap: 16, alignItems: "center", justifyItems: "center" }}>
      <BakaTooltip variant={"rich"} style={{ width: 312 }}>
        <div style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
          <BakaText variant={"title-small"}>Title</BakaText>
          <BakaText variant={["body-medium", "variant"]}>
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </BakaText>
        </div>
        <div style={{ padding: "0 8px", display: "flex", gap: 8 }}>
          <BakaButton>Action</BakaButton>
          <BakaButton>Action</BakaButton>
        </div>
      </BakaTooltip>
      <BakaTooltip variant={"rich"} style={{ width: 312 }}>
        <div style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
          <BakaText variant={"title-small"}>Title</BakaText>
          <BakaText variant={["body-medium", "variant"]}>
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </BakaText>
        </div>
      </BakaTooltip>
    </div>
  );
}
