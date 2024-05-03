import { BakaCard, BakaText } from "baka-ui";

export default function HeadlineDemo() {
  return (
    <BakaCard style={{ padding: 24 }}>
      <BakaText variant={"headline-large"}>Headline Large &mdash; Roboto 32/40 . 0</BakaText>
      <BakaText variant={"headline-medium"}>Headline Medium &mdash; Roboto 28/36 . 0</BakaText>
      <BakaText variant={"headline-small"}>Headline Small &mdash; Roboto 24/32 . 0</BakaText>
    </BakaCard>
  );
}
