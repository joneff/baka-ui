import { BakaSwitch, BakaSwitchProps } from "baka-ui";

export type SwitchStoryProps = BakaSwitchProps & {};

export const defaultProps: SwitchStoryProps = {
  variant: undefined,
  checked: false,
  hovered: false,
  focused: false,
  activated: false,
  disabled: false,
};

export default function SwitchStory(props: SwitchStoryProps) {
  const { variant, ...other } = { ...defaultProps, ...props };

  return <BakaSwitch {...other} variant={variant} />;
}
