import { useState } from "react";
import SearchBox from "./components/SearchBox";
import StatusFilter from "./components/StatusFilter";
import AreaFilter from "./components/AreaFilter";
import EmptyMessage from "./components/EmptyMessage";
import ResidentList from "./components/ResidentList";

import { residents } from "./data/residents";
import type { AreaFilterType, FilterStatus } from "./types/resident";
import "./styles/App.scss";

const statusFilters: FilterStatus[] = ["전체", "활동중", "휴식중", "대기중"];
const areaFilters: AreaFilterType[] = ["전체", "동쪽 마을", "서쪽 마을", "남쪽 마을"]; // prettier-ignore

function App() {
  const [keyword, setKeyword] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>("전체");
  const [selectedArea, setSelectedArea] = useState<AreaFilterType>("전체");

  const filteredResidents = residents.filter((resident) => {
    const isMatchedKeyword = resident.name.includes(keyword);
    const isMatchedStatus =
      selectedStatus === "전체" || resident.status === selectedStatus;
    const isMatchedArea =
      selectedArea === "전체" || resident.area === selectedArea;

    return isMatchedKeyword && isMatchedStatus && isMatchedArea;
  });

  return (
    <div className="app">
      <header className="page-header">
        <h1>슬기로운 마을 생활</h1>
        <p>마을 주민 관리 화면을 만들어봅니다.</p>
      </header>

      <SearchBox keyword={keyword} onChangekeyword={setKeyword} />
      <StatusFilter
        selectedStatus={selectedStatus}
        onChangeStatus={setSelectedStatus}
      />

      <AreaFilter />

      {/* <div className="filter-area">
        {areaFilters.map((area) => (
          <button
            key={area}
            type="button"
            className={selectedArea === area ? "is-active" : ""}
            onClick={() => setSelectedArea(area)}
          >
            {area}
          </button>
        ))}
      </div> */}

      {filteredResidents.length > 0 ? (
        <ResidentList residents={filteredResidents} />
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
}

export default App;
