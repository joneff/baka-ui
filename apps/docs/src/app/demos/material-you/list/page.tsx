import { BakaAvatar, BakaCheckbox, BakaList, BakaListItem, BakaText } from "baka-ui";

export default async function ListDemo() {
  return (
    <div className="container-low">
      <BakaList style={{ width: 360 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <BakaListItem key={i}>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
              List item
            </BakaText>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        ))}
      </BakaList>
    </div>
  );
}
