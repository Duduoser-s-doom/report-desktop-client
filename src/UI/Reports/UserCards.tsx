import { observer } from "mobx-react";
import { reports } from "../../BLL/Reports";
import { Pagination, UserCard } from "../Bricks";
import loading from "../assets/loading.gif"

export const UserCards = observer(() => {
  return (
    <div id="usercards" className="my-2">
      <div style={{ height: 450, overflowY: "scroll",display: "flex", justifyContent:"center" }}>
        {reports.isFetchingReports
          ? <img src={loading} />
          : reports.reports.fromSearch.map((r) => (
              <div key={`usercard${r.reportId}`} className="my-2">
                <UserCard {...r} />
              </div>
            ))}
      </div>
      <div className="d-flex w-100 mt-3 justify-content-center">
        {reports.countReports > 10 && (
          <Pagination
            onChangePage={reports.setPage}
            page={reports.page}
            count={reports.countReports}
            portionSize={10}
          />
        )}
      </div>
    </div>
  );
});
