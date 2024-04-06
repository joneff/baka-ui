import { BakaRadio, BakaRadioProps, BakaText } from "baka-ui";

export type RadioStoryProps = BakaRadioProps & {
  label?: boolean;
};

export const defaultProps: RadioStoryProps = {
  label: true,
  checked: false,
  hovered: false,
  focused: false,
  activated: false,
  disabled: false,
};

export default function RadioStory(props: RadioStoryProps) {
  const { label, ...other } = { ...defaultProps, ...props };

  return label ? (
    <BakaText
      as="label"
      variant="label-large"
      style={{ display: "flex", gap: 16, alignItems: "center" }}
    >
      <BakaRadio {...other} />
      Label
    </BakaText>
  ) : (
    <BakaRadio {...other} />
  );
}
