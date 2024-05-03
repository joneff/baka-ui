import { BakaCard, BakaText } from "baka-ui";

export default function TitleDemo() {
  return (
    <BakaCard style={{ padding: 24 }}>
      <BakaText variant={"title-large"}>Title Large &mdash; Roboto Regular 22/28 . 0</BakaText>
      <BakaText variant={"title-medium"}>Title Medium &mdash; Roboto Medium 16/24 . +0.15</BakaText>
      <BakaText variant={"title-small"}>Title Small &mdash; Roboto Medium 14/20 . +0.1</BakaText>
    </BakaCard>
  );
}
