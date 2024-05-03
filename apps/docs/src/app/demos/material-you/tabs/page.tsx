import { BakaIcon, BakaTab, BakaTabGroup, BakaText } from "baka-ui";

export default function TabsDemos() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto",
        columnGap: 16,
        rowGap: 32,
        maxWidth: 630,
      }}
    >
      <BakaTabGroup variant={["primary"]}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab</BakaText>
        </BakaTab>
      </BakaTabGroup>

      <BakaTabGroup variant={["secondary"]}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab</BakaText>
        </BakaTab>
      </BakaTabGroup>
    </div>
  );
}
