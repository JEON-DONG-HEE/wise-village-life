import type { FilterStatus } from "../types/resident";

const statusFilters: FilterStatus[] = ["전체", "활동중", "휴식중", "대기중"];

type StatusFilterProps = {
  selectedStatus: FilterStatus;
  onChangeStatus: (status: FilterStatus) => void;
};

function StatusFilter({ selectedStatus, onChangeStatus }: StatusFilterProps) {
  return (
    <div className="filter-area">
      {statusFilters.map((status) => (
        <button
          key={status}
          type="button"
          className={selectedStatus === status ? "is-active" : ""}
          onClick={() => onChangeStatus(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default StatusFilter;
