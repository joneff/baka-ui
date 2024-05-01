import Image from "next/image";
import {
  BakaAvatar,
  BakaCheckbox,
  BakaIcon,
  BakaList,
  BakaListItem,
  BakaRadio,
  BakaSwitch,
  BakaText,
} from "baka-ui";

export type ListItemStoryProps = {
  prefix: null | "avatar" | "icon" | "media" | "checkbox" | "radio" | "switch";
  suffix: null | "checkbox" | "icon";
  media?: "image" | "video";
  multiLine: boolean;
};

export const defaultProps = {
  multiLine: false,
  prefix: null,
  media: "image",
  suffix: null,
};

export default function ListItemStory(props: ListItemStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div className="container-low" style={{ maxWidth: 360 }}>
      <BakaList>
        <BakaListItem
          variant={
            [
              args.multiLine ? "multi-line" : false,
              args.prefix === "media" && args.media === "video" ? "video" : false,
            ].filter(Boolean) as any[]
          }
        >
          {(() => {
            switch (args.prefix) {
              case "avatar":
                return <BakaAvatar>A</BakaAvatar>;
              case "icon":
                return <BakaIcon>person</BakaIcon>;
              case "media":
                return args.media === "video" ? (
                  <Image src="/media.png" width={114} height={64} alt="media-video" />
                ) : (
                  <Image src="/media-small.png" width={56} height={56} alt="media-small" />
                );
              case "checkbox":
                return <BakaCheckbox readOnly={true} checked={true} />;
              case "radio":
                return <BakaRadio readOnly={true} checked={true} />;
              case "switch":
                return <BakaSwitch readOnly={true} checked={false} />;
              default:
                return null;
            }
          })()}
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
              style={
                args.multiLine
                  ? { width: "100%" }
                  : {
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "100%",
                    }
              }
            >
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </BakaText>
          </div>
          {(() => {
            switch (args.suffix) {
              case "checkbox":
                return <BakaCheckbox readOnly={true} checked={true} />;
              case "icon":
                return <BakaIcon>arrow_right</BakaIcon>;
              default:
                return null;
            }
          })()}
        </BakaListItem>
      </BakaList>
    </div>
  );
}
