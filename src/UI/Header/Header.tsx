import { Nav } from "react-bootstrap";
import { NavigationRoutes } from "../../consts/navigation-routes";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <Nav variant="tabs" className={"px-4"} defaultActiveKey="/home">
      <HeaderLink path={NavigationRoutes.home} title={"Home"} />
      <HeaderLink path={NavigationRoutes.reports} title={"Reports"} />
      <HeaderLink path={NavigationRoutes.constructor} title={"Constructor"}/>
    </Nav>
  );
};
