import { BakaRadio, BakaText } from "baka-ui";

export default function RadioWithLabels() {
  return (
    <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <BakaRadio id="apple" name="fruit" value="apple" />
        <BakaText as="label" htmlFor="apple">
          Apple
        </BakaText>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <BakaRadio id="banana" name="fruit" value="banana" />
        <BakaText as="label" htmlFor="banana">
          Banana
        </BakaText>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <BakaRadio id="cherry" name="fruit" value="cherry" />
        <BakaText as="label" htmlFor="cherry">
          Cherry
        </BakaText>
      </div>
    </div>
  );
}
