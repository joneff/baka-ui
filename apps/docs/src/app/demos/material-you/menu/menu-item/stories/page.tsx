import { BakaIcon, BakaMenu, BakaMenuItem, BakaText } from "baka-ui";

export type MenuItemStoryProps = {
  prefix: boolean;
  suffix: boolean;
};

export const defaultProps = {
  prefix: true,
  suffix: true,
};

export default function MenuItemStory(props: MenuItemStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <BakaMenu style={{ width: 360 }}>
      <BakaMenuItem>
        {args.prefix && <BakaIcon>cut</BakaIcon>}
        <BakaText>Menu item</BakaText>
        {args.suffix && <BakaIcon>chevron_right</BakaIcon>}
      </BakaMenuItem>
    </BakaMenu>
  );
}
