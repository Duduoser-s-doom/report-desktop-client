import styles from "./App.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { RootReducer } from "./UI/Routes/RootReducer";
import { Header } from "./UI/Header/Header";

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <RootReducer />      
    </div>
  );
};
