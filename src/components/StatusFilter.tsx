import type { FilterStatus } from "../types/resident";

const statusFilters: FilterStatus[] = ["전체", "활동중", "휴식중", "대기중"];

type StatusFilterProps = {
  selectedStatus: FilterStatus;
  onChangeStatus: (status: FilterStatus) => void;
};

function StatusFilter({ selectedStatus, onChangeStatus }: StatusFilterProps) {
  return (
    <div className="filter-group">
      <p id="status-filter-title" className="filter-title">
        활동 상태
      </p>

      <div
        className="filter-area"
        role="group"
        aria-labelledby="status-filter-title"
      >
        {statusFilters.map((status) => (
          <button
            key={status}
            type="button"
            className={selectedStatus === status ? "is-active" : ""}
            aria-pressed={selectedStatus === status}
            onClick={() => onChangeStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StatusFilter;
