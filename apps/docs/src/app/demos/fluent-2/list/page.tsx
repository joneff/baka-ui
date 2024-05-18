import { BakaIcon, BakaList, BakaListItem, BakaText } from "baka-ui";

export default function ListDemo() {
  return (
    <div className="background-3">
      <BakaList style={{ width: 269 }}>
        <BakaListItem tabIndex={1} focused={true}>
          <BakaIcon></BakaIcon>
          <BakaText variant="subtitle-2">Favorites</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaIcon></BakaIcon>
          <BakaText>Inbox</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaIcon></BakaIcon>
          <BakaText>Sent</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaIcon></BakaIcon>
          <BakaText>Draft</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaText variant="subtitle-2">colin_ballinger@acme.com</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaIcon></BakaIcon>
          <BakaText>Inbox</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaIcon></BakaIcon>
          <BakaText>Archive</BakaText>
        </BakaListItem>
        <BakaListItem>
          <BakaIcon></BakaIcon>
          <BakaIcon></BakaIcon>
          <BakaText>Deleted items</BakaText>
        </BakaListItem>
      </BakaList>
    </div>
  );
}
