import { BakaSwitch } from "baka-ui";

export default function SwitchDemo() {
  return (
    <div style={{ display: "flex", gap: 32, flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 32 }}>
        <BakaSwitch defaultChecked={true} />
        <BakaSwitch defaultChecked={true} hovered={true} />
        <BakaSwitch defaultChecked={true} focused={true} />
        <BakaSwitch defaultChecked={true} activated={true} />
        <BakaSwitch defaultChecked={true} disabled={true} />
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <BakaSwitch variant="icon" defaultChecked={true} />
        <BakaSwitch variant="icon" defaultChecked={true} hovered={true} />
        <BakaSwitch variant="icon" defaultChecked={true} focused={true} />
        <BakaSwitch variant="icon" defaultChecked={true} activated={true} />
        <BakaSwitch variant="icon" defaultChecked={true} disabled={true} />
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <BakaSwitch />
        <BakaSwitch hovered={true} />
        <BakaSwitch focused={true} />
        <BakaSwitch activated={true} />
        <BakaSwitch disabled={true} />
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <BakaSwitch variant="icon" />
        <BakaSwitch variant="icon" hovered={true} />
        <BakaSwitch variant="icon" focused={true} />
        <BakaSwitch variant="icon" activated={true} />
        <BakaSwitch variant="icon" disabled={true} />
      </div>
    </div>
  );
}
