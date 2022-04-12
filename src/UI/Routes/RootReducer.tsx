import { NavigationRoutes } from "../../consts/navigation-routes";
import { Reports } from "../Reports/Reports";
import { Route } from "./Route";

export const RootReducer = () => {
  return (
    <div>
      <Route path={NavigationRoutes.home} render={() => <></>} />
      <Route path={NavigationRoutes.reports} render={() => <Reports />} />
      <Route path={NavigationRoutes.constructor} render={() => <></>} />
    </div>
  );
};
