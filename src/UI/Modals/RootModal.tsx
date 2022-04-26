import { ReportsEditModal } from "./ReportsEditModal";
import { ReportsInsertModal } from "./ReportsInsertModal";

export const RootModal = () => {
  return (
    <div id="root-modal">
      <ReportsInsertModal />
      <ReportsEditModal />
    </div>
  );
};
