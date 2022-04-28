import { makeAutoObservable } from "mobx";
import { Element } from "../../types";

class Constructor {
  elements = [] as Element[];
  constructor() {
    makeAutoObservable(this);
  }
  addElement = (element: Element) => {
    this.elements.push(element);
  };
  removeElementById = (elementId: number) => {
    this.elements = this.elements.filter((e) => e.id !== elementId);
  };
  editElement = (element: Element) => {
    this.elements = this.elements.map((e) =>
      e.id === element.id ? element : e
    );
  };
  resetDates = () => {};
}

export const constructor = new Constructor();
