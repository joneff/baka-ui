import { type Docs } from "contentlayer/generated";
// @ts-expect-error
import Logo from "@/icons/maskot-material-you.inline-svg";
import { Navigation, NavigationProps } from "@/components/navigation/navigation";
import { SidenavCategoryItem } from "./sidenav-category-item.server";
import clsx from "clsx";
import { SidenavCategoryClient, ToggleButton } from "./sidenav-category.client";
import { Icon } from "@/components/misc/icon";
import Link from "next/link";
import { Button } from "@/components/buttons/button";
import { ThemeToggle } from "../theme-toggle/theme-toggle.server";
// @ts-expect-error
import StorybookIcon from "@/icons/storybook.inline-svg";
import { StorybookLink } from "../storybook-link";

export type SidenavCategoryProp = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
} & NavigationProps;

export const SidenavCategory = (props: SidenavCategoryProp) => {
  const { data, ...other } = props;

  return (
    <SidenavCategoryClient>
      <Navigation
        variant={"rail"}
        className={clsx(other.className, "bg-surface-container z-20 flex")}
        {...other}
      >
        <div className="flex items-center flex-col flex-1 justify-between">
          <div className="flex items-center flex-col overflow-auto gap-2">
            <ToggleButton className="xl:hidden">
              <Icon />
            </ToggleButton>
            <Button variant={["fab", "tertiary"]} as={Link} href="/" title="Home" className="p-3">
              <Icon>
                <Logo width={32} height={32} alt="Baka Material You Logo" viewBox={"0 0 56 40"} />
              </Icon>
            </Button>
            {data.map((group) => (
              <SidenavCategoryItem
                key={group.title}
                icon={<>{group.icon}</>}
                match={group.docs?.map((doc) => doc.url)}
                title={group.title}
                url={group.docs?.[0].url}
              />
            ))}
            <SidenavCategoryItem
              as={StorybookLink}
              icon={<StorybookIcon width={24} height={24} />}
              title={"Storybook"}
              href={"/storybook"}
            />
          </div>
          <ThemeToggle />
        </div>
      </Navigation>
    </SidenavCategoryClient>
  );
};
