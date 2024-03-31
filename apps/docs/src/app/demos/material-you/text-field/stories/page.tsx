import {
  BakaButton,
  BakaIcon,
  BakaInput,
  BakaText,
  BakaTextField,
  BakaTextFieldProps,
} from "baka-ui";

export type TextFieldStoryProps = BakaTextFieldProps & {
  value: string;
  placeholder: boolean;
  label: boolean;
  leadingIcon: boolean;
  trailingIcon: boolean;
  state: "" | "hovered" | "focused" | "invalid" | "disabled";
};
export const defaultProps = {
  value: "",
  placeholder: true,
  label: true,
  leadingIcon: true,
  trailingIcon: true,
  state: "",
};

export default function TextFieldStory(props: TextFieldStoryProps) {
  const { value, placeholder, label, leadingIcon, trailingIcon, state, ...other } = props;

  return (
    <BakaTextField {...other} {...(state ? { [state]: true } : {})}>
      {leadingIcon && <BakaIcon>search</BakaIcon>}
      {label && <BakaText variant="label-medium">Label</BakaText>}
      <BakaInput
        {...(placeholder && { placeholder: "Placeholder" })}
        value={value}
        empty={!value}
        readOnly={true}
      />
      {trailingIcon &&
        (state === "invalid" ? (
          <BakaButton variant={["icon"]}>
            <BakaIcon variant={["filled", "error"]}>error</BakaIcon>
          </BakaButton>
        ) : (
          <BakaButton variant={"icon"}>
            <BakaIcon>cancel</BakaIcon>
          </BakaButton>
        ))}
    </BakaTextField>
  );
}
