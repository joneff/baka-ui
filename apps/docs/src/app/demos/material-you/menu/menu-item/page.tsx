import { BakaIcon, BakaMenu, BakaMenuItem, BakaText } from "baka-ui";

export default function MenuItemDemo() {
  return (
    <BakaMenu style={{ width: 360 }}>
      <BakaMenuItem>
        <BakaIcon>cut</BakaIcon>
        <BakaText>Menu item</BakaText>
        <BakaIcon>chevron_right</BakaIcon>
      </BakaMenuItem>
    </BakaMenu>
  );
}
