import { observer } from "mobx-react";
import { navigation } from "../../BLL/Navigation";
import { NavigationRoutes } from "../../consts";

type Props = {
  path: NavigationRoutes;
  render: () => React.ReactNode;
};
export const Route = observer(({ path, render }: Props) => {
  if (path === navigation.location) {
    return <div id={path}>{render()}</div>;
  }
  return <></>;
});
