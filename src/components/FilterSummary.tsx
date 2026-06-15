import type { AreaFilterType, FilterStatus } from "./types/resident";

type FilterSummaryProps = {
  totalCount: number;
  filteredCount: number;
  keyword: string;
  selectedStatus: FilterStatus;
  selectedArea: AreaFilterType;
  isFiltered: boolean;
  onResetFilters: () => void;
};

function FilterSummary() {
  return <div>필터 요약</div>;
}

export default FilterSummary;
