import { BakaAvatar, BakaButton, BakaCard, BakaCardProps, BakaIcon, BakaText } from "baka-ui";

export type CardStoryProps = BakaCardProps & {
  type: "vertical" | "horizontal";
};
export const defaultProps: CardStoryProps = {
  type: "vertical",
};

export default function CardStory(props: CardStoryProps) {
  const { type, ...other } = { ...defaultProps, ...props };

  switch (type) {
    case "horizontal":
      return (
        <BakaCard variant={["horizontal", other.variant]} style={{ width: 360 }}>
          <div style={{ display: "flex", flexGrow: 1, gap: 16, padding: 16, alignItems: "center" }}>
            <BakaAvatar>
              <span>A</span>
            </BakaAvatar>
            <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 4 }}>
              <BakaText variant="title-medium">Header</BakaText>
              <BakaText variant="body-medium">Subhead</BakaText>
            </div>
          </div>

          <img src="./media-small.png" alt="media" width={80} height={80} />
        </BakaCard>
      );
    case "vertical":
    default: {
      return (
        <BakaCard {...other} style={{ width: 360 }}>
          <div
            style={{
              display: "flex",
              padding: "12px 4px 12px 16px",
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <BakaAvatar>
                <span>A</span>
              </BakaAvatar>
              <BakaText style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <BakaText variant={"title-medium"}>Header</BakaText>
                <BakaText variant={"body-medium"}>Subhead</BakaText>
              </BakaText>
            </div>
            <BakaButton variant={["icon"]}>
              <BakaIcon>more_vert</BakaIcon>
            </BakaButton>
          </div>
          <div>
            <img
              src="./media.png"
              alt="media"
              width={720}
              height={376}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "stretch",
              flexDirection: "column",
              gap: 32,
              padding: 16,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <BakaText variant={"body-large"}>Title</BakaText>
              <BakaText variant={"body-medium"}>Subhead</BakaText>
            </div>
            <BakaText variant={"body-medium"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </BakaText>
            <div
              style={{ display: "flex", alignSelf: "stretch", justifyContent: "flex-end", gap: 8 }}
            >
              <BakaButton variant={["outlined"]}>Enabled</BakaButton>
              <BakaButton variant={["filled"]}>Enabled</BakaButton>
            </div>
          </div>
        </BakaCard>
      );
    }
  }
  //   return <BakaCard {...other}></BakaCard>;
}
