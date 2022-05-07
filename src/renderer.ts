import { ipcRenderer } from "electron";
import { Element } from "./types";

export const fetchSavedElements = () => {
  ipcRenderer.send("FETCH_ELEMENTS", "elements");
};

export const saveNewElements = (elements: Element[]) => {
  ipcRenderer.send("SAVE_ELEMENTS", elements);
};
