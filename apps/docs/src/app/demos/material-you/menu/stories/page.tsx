import { BakaMenu, BakaMenuItem, BakaText } from "baka-ui";

export type MenuStoryProps = {
  items: number;
  scrollable: boolean;
};

export const defaultProps = {
  scrollable: true,
  items: 5,
};

export default function MenuStory(props: MenuStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <BakaMenu {...args} style={{ width: 360, ...(args.scrollable ? { maxHeight: 300 } : {}) }}>
      {Array.from({ length: args.items }, (_, i) => (
        <BakaMenuItem key={i}>
          <BakaText>Menu item</BakaText>
        </BakaMenuItem>
      ))}
    </BakaMenu>
  );
}
