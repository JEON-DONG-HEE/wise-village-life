import type {
  AreaFilterType,
  FilterStatus,
  SortOrder,
} from "../types/resident";
import { getSortOrderLabel } from "../utils/sortLabel";

type FilterSummaryProps = {
  totalCount: number;
  filteredCount: number;
  keyword: string;
  selectedStatus: FilterStatus;
  selectedArea: AreaFilterType;
  sortOrder: SortOrder;
  isFiltered: boolean;
  onResetFilters: () => void;
};

function FilterSummary({
  totalCount,
  filteredCount,
  keyword,
  selectedStatus,
  selectedArea,
  sortOrder,
  isFiltered,
  onResetFilters,
}: FilterSummaryProps) {
  const sortOrderLabel = getSortOrderLabel(sortOrder);

  return (
    <div className="filter-summary-box">
      <div className="result-summary">
        총 {totalCount} 명 중 {filteredCount}
      </div>

      <div className="filter-summary">
        검색어: {keyword || "없음"} / 상태: {selectedStatus} / 구역:{" "}
        {selectedArea} / 정렬: {sortOrderLabel}
      </div>

      {isFiltered && (
        <button
          type="button"
          className="reset-filter-button"
          onClick={onResetFilters}
        >
          필터 초기화
        </button>
      )}
    </div>
  );
}

export default FilterSummary;
