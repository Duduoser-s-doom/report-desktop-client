import { makeAutoObservable } from "mobx";

class Toast {
  title = ""
  constructor() {
    makeAutoObservable(this);
  }
  resetDates = () => {
    this.title = "";
  };
  show = (title:string) => {
    this.title = title;
  };
  hide = () => {
    this.title = "";
  };
}

export const toast = new Toast();
