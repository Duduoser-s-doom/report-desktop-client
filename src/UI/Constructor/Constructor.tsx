import { observer } from "mobx-react";
import { useCallback, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Element } from "../../types";
import { constructor } from "../../BLL/Constructor";
import { fetchSavedElements } from "../../renderer";
import { FormHeader } from "./FormHeader";
import { Sandbox } from "./Sandbox";
const { ipcRenderer } = window.require("electron");

export const Constructor = observer(() => {
  useEffect(() => {
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
    <Container className="mt-3">
      <FormHeader />
      <Sandbox />
    </Container>
  );
});
