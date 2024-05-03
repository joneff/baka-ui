import { BakaIcon, BakaTab, BakaTabGroup, BakaText } from "baka-ui";

export default function TabsDemos() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "auto",
        columnGap: 16,
        rowGap: 32,
        maxWidth: 630
      }}
    >
      <BakaTabGroup variant={["primary"]}>
        <BakaTab selected={true}>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab</BakaText>
        </BakaTab>
      </BakaTabGroup>
      <BakaTabGroup variant={["primary", "overflow"]}>
        <BakaTab selected={true}>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab</BakaText>
        </BakaTab>
        <BakaTab>
          <BakaText>Tab</BakaText>
        </BakaTab>
      </BakaTabGroup>
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
      <BakaTabGroup variant={["primary", "overflow"]}>
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
      <BakaTabGroup variant={["primary"]}>
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
      <BakaTabGroup variant={["primary", "overflow"]}>
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
      <BakaTabGroup variant={["secondary", "overflow"]}>
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
      <BakaTabGroup variant={["secondary"]}>
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
      <BakaTabGroup variant={["secondary", "overflow"]}>
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
      </BakaTabGroup>
      {/*
      <BakaTabGroup variant={["primary"]}>
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
      <BakaTabGroup variant={"secondary"}>
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
      <BakaTabGroup variant={"secondary"}>
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
      <BakaTabGroup variant={"secondary"}>
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
      <BakaTabGroup variant={["primary", "overflow"]}>
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
      <BakaTabGroup variant={["primary", "overflow"]}>
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
      <BakaTabGroup variant={["primary", "overflow"]}>
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
      <BakaTabGroup variant={["secondary", "overflow"]}>
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
      <BakaTabGroup variant={["secondary", "overflow"]}>
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
      <BakaTabGroup variant={["secondary", "overflow"]}>
        <BakaTab selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
        <BakaTab>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaTab>
      </BakaTabGroup> */}
    </div>
  );
}
