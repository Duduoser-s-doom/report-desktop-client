import styles from "./App.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RootRouter } from "./UI/Routes";
import { Header } from "./UI/Header";

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <RootRouter />      
    </div>
  );
};
