import { makeAutoObservable } from "mobx";
import { NavigationRoutes } from "../../consts/navigation-routes";

class Navigation {
  location: string = NavigationRoutes.home;
  constructor() {
    makeAutoObservable(this);
  }
  resetDates = () => {
    this.location = NavigationRoutes.home;
  };
  push = (route: NavigationRoutes) => {
    this.location = this.location + route;
  };
  replace = () => {
    this.location = NavigationRoutes.home;
  };
  go = (route: NavigationRoutes) => {
    this.location = route;
  };
}

export const navigation = new Navigation();
