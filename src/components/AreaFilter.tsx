import type { AreaFilterType } from "../types/resident";

const areaFilters: AreaFilterType[] = ["전체", "동쪽 마을", "서쪽 마을","남쪽 마을",]; // prettier-ignore

type AreaFilterProps = {
  selectedArea: AreaFilterType;
  onChangeArea: (area: AreaFilterType) => void;
};

function AreaFilter({ selectedArea, onChangeArea }: AreaFilterProps) {
  return (
    <div className="filter-area">
      {areaFilters.map((area) => (
        <button
          key={area}
          type="button"
          className={selectedArea === area ? "is-active" : ""}
          onClick={() => onChangeArea(area)}
        >
          {area}
        </button>
      ))}
    </div>
  );
}

export default AreaFilter;
