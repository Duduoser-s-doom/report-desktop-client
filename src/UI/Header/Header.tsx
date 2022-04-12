import { observer } from "mobx-react";
import { Nav } from "react-bootstrap";
import { navigation } from "../../BLL/Navigation";
import { NavigationRoutes } from "../../consts/navigation-routes";
import { HeaderLink } from "./HeaderLink";

export const Header = observer(() => {
  return (
    <Nav
      id="header"
      variant="tabs"
      className={"px-4"}
      defaultActiveKey={NavigationRoutes.home}
      activeKey={navigation.location}
    >
      <HeaderLink path={NavigationRoutes.home} title={"Home"} />
      <HeaderLink path={NavigationRoutes.reports} title={"Reports"} />
      <HeaderLink path={NavigationRoutes.constructor} title={"Constructor"} />
    </Nav>
  );
});
