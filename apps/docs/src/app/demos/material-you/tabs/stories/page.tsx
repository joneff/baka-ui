import { BakaIcon, BakaTab, BakaTabGroup, BakaTabGroupProps, BakaText } from "baka-ui";

export type TabsStoryProps = {
  tabs: number;
  overflow: boolean;
  tab: {
    icons: boolean;
    text: boolean;
  };
  variant: "primary" | "secondary";
};

export const defaultProps = {
  variant: "primary",
  overflow: false,
  tab: {
    icons: true,
    text: true,
  },
  tabs: 3,
};

export default function TabStory(props: TabsStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div style={{ width: args.overflow ? 310 : 120 * args.tabs }}>
      <BakaTabGroup
        variant={
          [args.variant, args.overflow ? "overflow" : null].filter(
            Boolean
          ) as BakaTabGroupProps["variant"]
        }
      >
        {Array.from({ length: args.tabs }, (_, i) => (
          <BakaTab key={i} selected={i === 0}>
            {args.tab.icons && <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>}
            {args.tab.text && <BakaText>Tab</BakaText>}
          </BakaTab>
        ))}
      </BakaTabGroup>
    </div>
  );
}
