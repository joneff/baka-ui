import { BakaAvatar, BakaAvatarProps, BakaIcon } from "baka-ui";

export type AvatarStoryProps = BakaAvatarProps & {
  type: "letter" | "icon" | "image";
  children?: React.ReactNode;
};
export const defaultProps: AvatarStoryProps = {
  type: "letter",
};

export default function AvatarStory(props: AvatarStoryProps) {
  const { type, children, ...other } = { ...defaultProps, ...props };

  return (
    <>
      {(() => {
        switch (type) {
          case "icon":
            return (
              <BakaAvatar {...other}>
                <BakaIcon>check</BakaIcon>
              </BakaAvatar>
            );
          case "image":
            return (
              <BakaAvatar {...other}>
                <BakaIcon as="img" src="./avatar.svg" />
              </BakaAvatar>
            );
          case "letter":
          default:
            return <BakaAvatar {...other}>{children || "A"}</BakaAvatar>;
        }
      })()}
    </>
  );
}
