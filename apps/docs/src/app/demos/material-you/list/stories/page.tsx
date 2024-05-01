import { BakaAvatar, BakaCheckbox, BakaList, BakaListItem, BakaListProps, BakaText } from "baka-ui";

export type ListStoryProps = BakaListProps & {
  scrollable?: boolean;
  items?: number;
};

export const defaultProps = {
  scrollable: true,
  items: 7,
};

export default function ListStory(props: ListStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div className="container-low">
      <BakaList {...args} style={{ width: 360, ...(args.scrollable ? { maxHeight: 300 } : {}) }}>
        {Array.from({ length: args.items }, (_, i) => (
          <BakaListItem key={i}>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
              List item
            </BakaText>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        ))}
      </BakaList>
    </div>
  );
}
