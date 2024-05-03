import { BakaCard, BakaText } from "baka-ui";

export default function BodyDemo() {
  return (
    <BakaCard style={{ padding: 24 }}>
      <BakaText variant={"body-large"}>Body Large &mdash; Roboto 16/24 . +0.5</BakaText>
      <BakaText variant={"body-medium"}>Body Medium &mdash; Roboto 14/20 . +0.25</BakaText>
      <BakaText variant={"body-small"}>Body Small &mdash; Roboto 12/16 . +0.4</BakaText>
    </BakaCard>
  );
}
