import { BakaButton, BakaDialog, BakaIcon, BakaText } from "baka-ui";

export default function DialogDemo() {
  return (
    <BakaDialog style={{ width: 320 }} variant={"full-screen"}>
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
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
        <BakaButton variant={["text"]}>Action 2</BakaButton>
        <BakaButton variant={["text"]}>Action 1</BakaButton>
      </div>
    </BakaDialog>
  );
}
