import { BakaCard, BakaText } from "baka-ui";

export default function LabelDemo() {
  return (
    <BakaCard style={{ padding: 24 }}>
      <BakaText variant={"label-large"}>Label Large &mdash; Roboto Medium 14/20 . +0.1</BakaText>
      <BakaText variant={"label-medium"}>Label Medium &mdash; Roboto Medium 12/16 . +0.5</BakaText>
      <BakaText variant={"label-small"}>Label Small &mdash; Roboto Medium 11/16 . +0.5</BakaText>
    </BakaCard>
  );
}
