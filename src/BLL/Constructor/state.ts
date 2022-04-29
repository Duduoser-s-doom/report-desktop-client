import { makeAutoObservable } from "mobx";
import { Element } from "../../types";

class Constructor {
  elements = [] as Element[];
  selectedElement = null as null | Element
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
  setSelectedElementById=(elementId:number)=>{
    this.selectedElement = this.elements.filter((e) => e.id===elementId)[0]
  }
  resetSelectedElement = () =>{
    this.selectedElement = null
  }
  resetDates = () => {
    this.elements = []
    this.selectedElement = null
  };
}

export const constructor = new Constructor();
