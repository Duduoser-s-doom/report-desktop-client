import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RootRouter } from "./UI/Routes";
import { Header } from "./UI/Header";
import { RootModal } from "./UI/Modals";

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <RootRouter />
      <RootModal />
    </div>
  );
};
