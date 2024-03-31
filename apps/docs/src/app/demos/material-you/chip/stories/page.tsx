import { BakaAvatar, BakaChip, BakaChipProps, BakaIcon } from "baka-ui";

export type ChipStoryProps = BakaChipProps & {
  variant?: "elevated";
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  avatar?: boolean;
};

export const defaultProps: ChipStoryProps = {
  variant: "normal" as any,
  leadingIcon: false,
  trailingIcon: false,
  avatar: false,
  hovered: false,
  focused: false,
  activated: false,
  dragged: false,
  selected: false,
};

export default function ChipStory(props: ChipStoryProps) {
  const { leadingIcon, trailingIcon, avatar, variant, ...other } = { ...defaultProps, ...props };

  return (
    <BakaChip {...other} variant={variant}>
      {leadingIcon && <BakaIcon variant={"primary"}>local_taxi</BakaIcon>}
      {avatar && (
        <BakaAvatar>
          {props.selected ? (
            <BakaIcon variant={["filled"]}>check</BakaIcon>
          ) : (
            <img src="./avatar-light.svg" />
          )}
        </BakaAvatar>
      )}
      {!avatar && props.selected && (
        <BakaAvatar>
          <BakaIcon variant={["filled"]}>check</BakaIcon>
        </BakaAvatar>
      )}
      <span>Label</span>
      {trailingIcon && <BakaIcon>close</BakaIcon>}
    </BakaChip>
  );
}
