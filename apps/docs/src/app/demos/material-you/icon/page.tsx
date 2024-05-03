import { BakaIcon } from "baka-ui";

export default function IconDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <BakaIcon variant={["small"]}>settings</BakaIcon>
      <BakaIcon variant={["filled", "small"]}>settings</BakaIcon>
      <BakaIcon variant={["medium"]}>settings</BakaIcon>
      <BakaIcon variant={["medium", "filled"]}>settings</BakaIcon>
      <BakaIcon variant={["large"]}>settings</BakaIcon>
      <BakaIcon variant={["filled", "large"]}>settings</BakaIcon>

      <BakaIcon variant={["primary", "small"]}>settings</BakaIcon>
      <BakaIcon variant={["primary", "filled", "small"]}>settings</BakaIcon>
      <BakaIcon variant={["primary", "medium"]}>settings</BakaIcon>
      <BakaIcon variant={["primary", "medium", "filled"]}>settings</BakaIcon>
      <BakaIcon variant={["primary", "large"]}>settings</BakaIcon>
      <BakaIcon variant={["primary", "filled", "large"]}>settings</BakaIcon>

      <BakaIcon variant={["error", "small"]}>settings</BakaIcon>
      <BakaIcon variant={["error", "filled", "small"]}>settings</BakaIcon>
      <BakaIcon variant={["error", "medium"]}>settings</BakaIcon>
      <BakaIcon variant={["error", "medium", "filled"]}>settings</BakaIcon>
      <BakaIcon variant={["error", "large"]}>settings</BakaIcon>
      <BakaIcon variant={["error", "filled", "large"]}>settings</BakaIcon>
    </div>
  );
}
