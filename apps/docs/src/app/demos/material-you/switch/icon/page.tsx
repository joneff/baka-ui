import { BakaSwitch } from "baka-ui";

export default function SwitchDemo() {
  return (
    <div style={{ display: "flex", gap: 32, flexDirection: "column" }}>
      <BakaSwitch variant="icon" />
      <BakaSwitch variant="icon" defaultChecked={true} />
    </div>
  );
}
