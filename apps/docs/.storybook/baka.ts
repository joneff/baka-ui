import { create } from "@storybook/theming/create";
// @ts-expect-error
import logo from "../src/images/logo-dark.png";

export default create({
  base: "dark",
  brandTitle: "BakaUI",
  brandUrl: "https://baka-ui.com",
  brandImage: logo,
  brandTarget: "_self",
});
