import { BakaCheckbox, BakaCheckboxProps } from "baka-ui";

export type CheckboxStoryProps = BakaCheckboxProps & {};

export const defaultProps: CheckboxStoryProps = {
  variant: "primary",
  checked: true,
  indeterminate: false,
  hovered: false,
  focused: false,
  activated: false,
  disabled: false,
};

export default function CheckboxStory(props: CheckboxStoryProps) {
  return <BakaCheckbox {...props} />;
}
