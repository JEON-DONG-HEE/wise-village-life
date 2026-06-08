const areaFilters = ["전체", "동쪽 마을", "서쪽 마을", "남쪽 마을"];

function AreaFilter() {
  return (
    <div className="filter-area">
      {areaFilters.map((area) => (
        <button key="area" type="button">
          {area}
        </button>
      ))}

      {/* {areaFilters.map((area) => (
        <button
          key={area}
          type="button"
          className={selectedArea === area ? "is-active" : ""}
          onClick={() => setSelectedArea(area)}
        >
          {area}
        </button>
      ))} */}
    </div>
  );
}

export default AreaFilter;
