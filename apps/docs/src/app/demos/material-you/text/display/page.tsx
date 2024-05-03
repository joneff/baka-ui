import { BakaCard, BakaText } from "baka-ui";

export default function DisplayDemo() {
  return (
    <BakaCard style={{ padding: 24 }}>
      <BakaText variant={"display-large"}>
        Display Large <br /> &mdash; Roboto 57/64 -0.25
      </BakaText>
      <BakaText variant={"display-medium"}>
        Display Medium <br /> &mdash; Roboto 45/52 . 0
      </BakaText>
      <BakaText variant={"display-small"}>
        Display Small <br /> &mdash; Roboto 36/44 . 0
      </BakaText>
    </BakaCard>
  );
}
