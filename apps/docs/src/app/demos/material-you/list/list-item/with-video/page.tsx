import Image from "next/image";
import { BakaCheckbox, BakaList, BakaListItem, BakaText } from "baka-ui";

export default function ListItemWithVideoDemo() {
  return (
    <div className="container-low">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(1fr, 1fr)",
          gridColumnGap: 20,
          gridRowGap: 20,
          maxWidth: 740,
        }}
      >
        {/* With Video */}
        <BakaList>
          <BakaListItem variant={["video"]}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BakaText variant="body-large">List item</BakaText>
              <BakaText variant={["body-medium", "variant"]}>
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem variant={["multi-line", "video"]}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BakaText variant="body-large">List item</BakaText>
              <BakaText variant={["body-medium", "variant"]} style={{ width: "100%" }}>
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <BakaText variant="body-large">List item</BakaText>
              <BakaText
                variant={["body-medium", "variant"]}
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <BakaText variant="body-large">List item</BakaText>
              <BakaText
                variant={["body-medium", "variant"]}
                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
              >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
              </BakaText>
            </div>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media-video" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BakaText variant="body-large">List item</BakaText>
            </div>
          </BakaListItem>
        </BakaList>
        <BakaList>
          <BakaListItem variant={"video"}>
            <Image src="/media.png" width={114} height={64} alt="media" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
              <BakaText variant="body-large">List item</BakaText>
            </div>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        </BakaList>
      </div>
    </div>
  );
}
