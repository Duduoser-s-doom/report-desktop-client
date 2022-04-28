import { observer } from "mobx-react";
import { reports } from "../../BLL/Reports";
import { Pagination, UserCard } from "../Bricks";

export const UserCards = observer(() => {
  return (
    <div id="usercards" className="my-2">
      <div style={{ height: 500 }}>
        {reports.isFetchingReports
          ? "Loading"
          : reports.reports.fromSearch.map((r) => <div className="my-2"><UserCard {...r} /></div>)}
      </div>
      <div className="d-flex w-100 justify-content-center">
        {reports.reports.fromSearch.length/10>1 && <Pagination
          onChangePage={reports.setPage}
          page={reports.page}
          count={reports.reports.fromSearch.length}
          portionSize={10}
        />}
      </div>
    </div>
  );
});
