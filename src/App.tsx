import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RootRouter } from "./UI/Routes";
import { Header } from "./UI/Header";
import { RootModal } from "./UI/Modals";
import { useCallback, useEffect } from "react";
import { fetchSavedElements } from "./renderer";
import { constructor } from "./BLL/Constructor";
import { observer } from "mobx-react";
import { Element } from "./types";
const {ipcRenderer} = window.require("electron")

export const App = observer(() => {
useEffect(()=>{
  constructor.startStorageSync()
  fetchSavedElements();
}, []);
const handleFetchElements = useCallback(
  (event: any, data: { message: Element[] | null }) => {
    constructor.setElements(data.message);
    constructor.finishStorageSync()
  },
  []
);
useEffect(() => {
  ipcRenderer.on("HANDLE_FETCH_ELEMENTS", handleFetchElements);
  return () => {
    ipcRenderer.removeListener("HANDLE_FETCH_ELEMENTS", handleFetchElements);
  };
}, []);

const handleSaveElements = useCallback((event: any, data: Element[]) => {
  constructor.finishStorageSync()
},
[]);
useEffect(() => {
  ipcRenderer.on("HANDLE_SAVE_ELEMENTS", handleSaveElements);
  return () => {
    ipcRenderer.removeListener("HANDLE_SAVE_ELEMENTS", handleSaveElements);
  };
}, []);

  return (
    <div className={styles.App}>
      <Header />
      <RootRouter />
      <RootModal />
    </div>
  );
});
