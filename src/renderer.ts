import { Element } from "./types";
const { ipcRenderer } = window.require("electron");

export const fetchSavedElements = () => {
  ipcRenderer.send("FETCH_ELEMENTS", "elements");
};

export const saveNewElements = (elements: Element[]) => {
  ipcRenderer.send("SAVE_ELEMENTS", JSON.stringify(elements));
};
