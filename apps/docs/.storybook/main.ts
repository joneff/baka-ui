import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/app/demos/**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: "@storybook/nextjs",
  staticDirs: ["../tmp", "../fonts"], //👈 Configures the static asset folder in Storybook
  managerHead: (head) => `
  ${head}
  <link rel="icon" type="image/svg" href="./favicon.svg" />
  `,
};

export default config;
