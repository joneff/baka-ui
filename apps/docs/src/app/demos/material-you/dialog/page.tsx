import {
  BakaAvatar,
  BakaButton,
  BakaCheckbox,
  BakaDialog,
  BakaIcon,
  BakaListItem,
  BakaText,
} from "baka-ui";

export default function DialogDemo() {
  return (
    <BakaDialog style={{ width: 320 }}>
      <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
        <BakaIcon style={{ justifyContent: "center" }}>mobile_friendly</BakaIcon>
        <BakaText style={{ display: "flex", justifyContent: "center" }} variant={"headline-small"}>
          Dialog Title
        </BakaText>
        <BakaText variant={"body-medium"}>
          A dialog is a type of modal window that appears in front of app content to provide
          critical information, or prompt for a decision to be made.
        </BakaText>
      </div>
      <ul
        style={{
          background: "none",
          padding: 0,
          margin: 0,
          width: "calc(100% + 48px)",
          marginInline: "-24px",
        }}
      >
        <BakaListItem>
          <BakaAvatar>A</BakaAvatar>
          <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
            BakaList item
          </BakaText>
          <BakaText>100+</BakaText>
          <BakaCheckbox readOnly={true} />
        </BakaListItem>
        <BakaListItem>
          <BakaAvatar>A</BakaAvatar>
          <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
            BakaList item
          </BakaText>
          <BakaText>100+</BakaText>
          <BakaCheckbox readOnly={true} checked={true} />
        </BakaListItem>
        <BakaListItem>
          <BakaAvatar>A</BakaAvatar>
          <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
            BakaList item
          </BakaText>
          <BakaText>100+</BakaText>
          <BakaCheckbox readOnly={true} checked={true} />
        </BakaListItem>
      </ul>
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
        <BakaButton variant={["text"]}>Action 2</BakaButton>
        <BakaButton variant={["text"]}>Action 1</BakaButton>
      </div>
    </BakaDialog>
  );
}
