import { BakaButton, BakaButtonProps } from "baka-ui";

export type ButtonStoryProps = BakaButtonProps & {
  children: React.ReactNode;
};
export const defaultProps: ButtonStoryProps = {
  hovered: false,
  focused: false,
  activated: false,
  disabled: false,
  children: "Label",
};

export default function ButtonStory(props: ButtonStoryProps) {
  const { children, ...other } = { ...defaultProps, ...props };
  return <BakaButton {...other}>{children}</BakaButton>;
}
