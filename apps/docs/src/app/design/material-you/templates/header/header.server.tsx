import { Button } from "@/components/buttons/button";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Icon } from "@/components/misc/icon";
import Logo from "@/icons/maskot-material-you.svg";
import Image from "next/image";
import { TopBar } from "@/components/bars/top-bar";
import { ToggleButton } from "@/templates/sidenav/sidenav-category.client";

export const Header = () => {
  return (
    <TopBar>
      <Container variant={"fluid"}>
        <Row>
          <Column size={12} className="flex items-center justify-between">
            <div className="flex items-center gap-2 ml-[-24px]">
              <ToggleButton className="xl:hidden">
                <Icon>menu</Icon>
              </ToggleButton>
              <Button variant={"icon"}>
                <Image src={Logo.src} width={33} height={32} alt="Baka Material You Logo" />
              </Button>
            </div>
            <div className="flex items-center justify-end">
              <Button variant={"icon"}>
                <Icon>search</Icon>
              </Button>
              <Button variant={"icon"}>
                <Icon>dark_mode</Icon>
              </Button>
              <Button variant={"icon"}>
                <Icon>more_vert</Icon>
              </Button>
            </div>
          </Column>
        </Row>
      </Container>
    </TopBar>
  );
};
