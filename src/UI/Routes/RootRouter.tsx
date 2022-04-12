import { NavigationRoutes } from "../../consts";
import { Reports } from "../Reports";
import { Route } from "./Route";

export const RootRouter = () => {
  return (
    <div id="root-reducer">
      <Route path={NavigationRoutes.home} render={() => <></>} />
      <Route path={NavigationRoutes.reports} render={() => <Reports />} />
      <Route path={NavigationRoutes.constructor} render={() => <></>} />
    </div>
  );
};