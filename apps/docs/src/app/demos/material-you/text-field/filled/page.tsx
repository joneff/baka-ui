import { BakaTextField, BakaIcon, BakaText, BakaInput, BakaButton } from "baka-ui";

export default function FilledTextFieldDemo() {
  return (
    <div className="flex gap-4 flex-col">
      <BakaTextField style={{ width: 300 }}>
        <BakaIcon>search</BakaIcon>
        <BakaText>Label</BakaText>
        <BakaInput defaultValue="Placeholder" />
        <BakaButton variant={["icon"]}>
          <BakaIcon variant={["filled"]}>clear</BakaIcon>
        </BakaButton>
      </BakaTextField>
      <BakaTextField style={{ width: 300 }} hovered={true}>
        <BakaIcon>search</BakaIcon>
        <BakaText>Label</BakaText>
        <BakaInput defaultValue="Placeholder" />
        <BakaButton variant={["icon"]}>
          <BakaIcon variant={["filled"]}>clear</BakaIcon>
        </BakaButton>
      </BakaTextField>
      <BakaTextField style={{ width: 300 }} focused={true}>
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
        <BakaInput defaultValue="Placeholder" />
        <BakaButton variant={["icon"]}>
          <BakaIcon variant={["filled"]}>clear</BakaIcon>
        </BakaButton>
      </BakaTextField>
      <BakaTextField style={{ width: 300 }} disabled={true}>
        <BakaIcon>search</BakaIcon>
        <BakaText>Label</BakaText>
        <BakaInput defaultValue="Placeholder" />
        <BakaButton variant={["icon"]}>
          <BakaIcon variant={["filled"]}>clear</BakaIcon>
        </BakaButton>
      </BakaTextField>
    </div>
  );
}
