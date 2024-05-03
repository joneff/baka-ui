import { BakaIcon, BakaTab, BakaTabGroup, BakaText } from "baka-ui";

export default function TabsDemos() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto",
        gap: 16,
        border: "1px dotted #000",
      }}
    >
      <BakaTabGroup variant={["primary"]} style={{ width: 360 }}>
        <BakaTab selected={true}>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 4</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 5</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["primary"]} style={{ width: 360 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 4</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 5</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["primary"]} style={{ width: 360 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
      </BakaTabGroup>
      <br />
      <BakaTabGroup variant={"secondary"} style={{ width: 360 }}>
        <BakaTab selected={true}>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 4</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 5</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={"secondary"} style={{ width: 360 }}>
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
      </BakaTabGroup>
      <BakaTabGroup variant={"secondary"} style={{ width: 360 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
      </BakaTabGroup>
      <br />
      <BakaTabGroup variant={["primary", "overflow"]} style={{ width: 310 }}>
        <BakaTab selected={true}>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["primary", "overflow"]} style={{ width: 310 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["primary", "overflow"]} style={{ width: 310 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
      </BakaTabGroup>
      <br />
      <BakaTabGroup variant={["secondary", "overflow"]} style={{ width: 310 }}>
        <BakaTab selected={true}>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["secondary", "overflow"]} style={{ width: 310 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 1</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 2</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaText>Tab 3</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["secondary", "overflow"]} style={{ width: 310 }}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
      </BakaTabGroup>
    </div>
  );
}
