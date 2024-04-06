import {
  BakaDialog,
  BakaIcon,
  BakaText,
  BakaListItem,
  BakaAvatar,
  BakaCheckbox,
  BakaButton,
  BakaDialogProps,
} from "baka-ui";

export type DialogStoryProps = BakaDialogProps & {
  icon?: boolean;
  menu?: boolean;
  items?: boolean;
  itemsCount?: number;
  scrollable?: boolean;
};

export const defaultProps: DialogStoryProps = {
  variant: "basic",
  icon: false,
  items: true,
  itemsCount: 3,
};

export default function DialogStory(props: DialogStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <BakaDialog style={{ width: 320 }} variant={args.variant}>
      <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
        {args.icon && <BakaIcon style={{ justifyContent: "center" }}>mobile_friendly</BakaIcon>}
        <BakaText
          style={{ display: "flex", justifyContent: args.icon ? "center" : "flex-start" }}
          variant={"headline-small"}
        >
          Dialog Title
        </BakaText>
        <BakaText variant={"body-medium"}>
          A dialog is a type of modal window that appears in front of app content to provide
          critical information, or prompt for a decision to be made.
        </BakaText>
      </div>
      {args.items && (
        <ul
          style={{
            background: "none",
            padding: 0,
            margin: 0,
            width: "calc(100% + 48px)",
            marginInline: "-24px",
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          {new Array(args.itemsCount ?? 0).fill(null).map((_, index) => (
            <BakaListItem key={index}>
              <BakaAvatar>A</BakaAvatar>
              <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
                List item
              </BakaText>
              <BakaText>100+</BakaText>
              <BakaCheckbox readOnly={true} />
            </BakaListItem>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
        <BakaButton variant={["text"]}>Action 2</BakaButton>
        <BakaButton variant={["text"]}>Action 1</BakaButton>
      </div>
    </BakaDialog>
  );
}
