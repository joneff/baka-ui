import { BakaRadio } from "baka-ui";

export default function RadioDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", gap: 48 }}>
        <BakaRadio defaultChecked={true} />
        <BakaRadio defaultChecked={true} hovered={true} />
        <BakaRadio defaultChecked={true} focused={true} />
        <BakaRadio defaultChecked={true} activated={true} />
        <BakaRadio defaultChecked={true} disabled={true} />
      </div>
      <div style={{ display: "flex", gap: 48 }}>
        <BakaRadio />
        <BakaRadio hovered={true} />
        <BakaRadio focused={true} />
        <BakaRadio activated={true} />
        <BakaRadio disabled={true} />
      </div>
    </div>
  );
}
