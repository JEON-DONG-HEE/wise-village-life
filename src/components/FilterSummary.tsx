import type { AreaFilterType, FilterStatus } from "../types/resident";

type FilterSummaryProps = {
  totalCount: number;
  filteredCount: number;
  keyword: string;
  selectedStatus: FilterStatus;
  selectedArea: AreaFilterType;
  isFiltered: boolean;
  onResetFilters: () => void;
};

function FilterSummary({
  totalCount,
  filteredCount,
  keyword,
  selectedStatus,
  selectedArea,
  isFiltered,
  onResetFilters,
}: FilterSummaryProps) {
  return (
    <>
      <div className="result-summary">
        총 {totalCount} 명 중 {filteredCount}
      </div>

      <div className="filter-summary">
        검색어: {keyword || "없음"} / 상태: {selectedStatus} / 구역:{" "}
        {selectedArea}
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
    </>
  );
}

export default FilterSummary;
