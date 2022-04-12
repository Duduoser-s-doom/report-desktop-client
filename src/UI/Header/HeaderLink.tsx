import { observer } from "mobx-react";
import { Nav } from "react-bootstrap";
import { navigation } from "../../BLL/Navigation";
import { NavigationRoutes } from "../../consts/navigation-routes";

type Props = {
  path: NavigationRoutes;
  title: string;
};
export const HeaderLink = observer(({ path, title }: Props) => {
  const handleClick = () => {
    navigation.go(path);
  };
  return (
    <Nav.Item>
      <Nav.Link onClick={handleClick} eventKey={path}>
        {title}
      </Nav.Link>
    </Nav.Item>
  );
});
