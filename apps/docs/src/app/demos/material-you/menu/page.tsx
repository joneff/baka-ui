import { BakaMenu, BakaMenuItem, BakaText } from "baka-ui";

export default function MenuDemo() {
  return (
    <BakaMenu style={{ width: 360 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <BakaMenuItem key={i}>
          <BakaText>Menu item</BakaText>
        </BakaMenuItem>
      ))}
    </BakaMenu>
  );
}
