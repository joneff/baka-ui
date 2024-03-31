import { BakaButton, BakaIcon, BakaInput, BakaText, BakaTextField } from "baka-ui";

export default async function App() {
  const args = {};
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <BakaTextField style={{ width: 300 }}>
          <BakaIcon>search</BakaIcon>
          <BakaText>Label</BakaText>
          <BakaInput defaultValue="Placeholder" />
          <BakaButton variant={["icon"]}>
            <BakaIcon variant={["filled"]}>clear</BakaIcon>
          </BakaButton>
        </BakaTextField>
        <BakaTextField style={{ width: 300 }} invalid={true}>
          <BakaIcon>search</BakaIcon>
          <BakaText>Label</BakaText>
          <BakaInput defaultValue="Invalid" />
          <BakaButton variant={["icon"]}>
            <BakaIcon variant={["filled", "error"]}>error</BakaIcon>
          </BakaButton>
        </BakaTextField>
      </div>
      <div className="flex gap-4">
        <BakaTextField variant="outlined" style={{ width: 300 }}>
          <BakaIcon>search</BakaIcon>
          <BakaText>Label</BakaText>
          <BakaInput defaultValue="Placeholder" />
          <BakaButton variant={["icon"]}>
            <BakaIcon variant={["filled"]}>clear</BakaIcon>
          </BakaButton>
        </BakaTextField>
        <BakaTextField variant="outlined" style={{ width: 300 }} invalid={true}>
          <BakaIcon>search</BakaIcon>
          <BakaText>Label</BakaText>
          <BakaInput defaultValue="Invalid" />
          <BakaButton variant={["icon"]}>
            <BakaIcon variant={["filled", "error"]}>error</BakaIcon>
          </BakaButton>
        </BakaTextField>
      </div>
    </div>
  );
}
