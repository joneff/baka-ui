import { BakaIcon, BakaTab, BakaTabGroup, BakaText } from "baka-ui";

export default function TabsDemos() {
  return (
    <BakaTabGroup variant={["secondary", "overflow"]} style={{ width: 400 }}>
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
      <BakaTab>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>Tab</BakaText>
      </BakaTab>
      <BakaTab>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>Tab</BakaText>
      </BakaTab>
    </BakaTabGroup>
  );
}
