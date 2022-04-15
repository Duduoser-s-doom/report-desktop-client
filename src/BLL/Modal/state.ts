import { makeAutoObservable } from "mobx";
import { ModalRoutes } from "../../consts/modal-routes";

class Modal {
  visible: false | ModalRoutes = false;
  constructor() {
    makeAutoObservable(this);
  }
  resetDates = () => {
    this.visible = false;
  };
  show = (route: ModalRoutes) => {
    this.visible = route;
  };
  hide = () => {
    this.visible = false;
  };
}

export const modal = new Modal();
