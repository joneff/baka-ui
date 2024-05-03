import { BakaButton, BakaText, BakaTooltip } from "baka-ui";

export default function PlainTooltipDemo() {
  return (
    <div style={{ display: "grid", gridRowGap: 16, alignItems: "center", justifyItems: "center" }}>
      <BakaTooltip variant={"plain"}>Supporting text</BakaTooltip>
      <BakaTooltip variant={"plain"} style={{ width: 312 }}>
        Supporting text Body text string goes here lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt
      </BakaTooltip>
    </div>
  );
}
