import { useState } from "react";
import SearchBox from "./components/SearchBox";
import StatusFilter from "./components/StatusFilter";
import AreaFilter from "./components/AreaFilter";
import EmptyMessage from "./components/EmptyMessage";
import ResidentList from "./components/ResidentList";

import { residents } from "./data/residents";
import type { AreaFilterType, FilterStatus } from "./types/resident";
import "./styles/App.scss";

function App() {
  const [keyword, setKeyword] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>("전체");
  const [selectedArea, setSelectedArea] = useState<AreaFilterType>("전체");

  const trimmedKeyword = keyword.trim(); // 검색어에 공백만 있을 경우 예외처리
  const handleResetFilters = () => {
    setKeyword("");
    setSelectedStatus("전체");
    setSelectedArea("전체");
  };
  const isFiltered =
    trimmedKeyword !== "" ||
    selectedStatus !== "전체" ||
    selectedArea !== "전체";

  const filteredResidents = residents.filter((resident) => {
    const isMatchedKeyword = resident.name.includes(trimmedKeyword);
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
      {/* prettier-ignore */}
      <StatusFilter selectedStatus={selectedStatus} onChangeStatus={setSelectedStatus} />
      <AreaFilter selectedArea={selectedArea} onChangeArea={setSelectedArea} />

      <div className="result-summary">
        총 {residents.length} 명 중 {filteredResidents.length}
      </div>

      <div className="filter-summary">
        검색어: {trimmedKeyword || "없음"} / 상태: {selectedStatus} / 구역:{" "}
        {selectedArea}
      </div>

      {isFiltered && (
        <button
          type="button"
          className="reset-filter-button"
          onClick={handleResetFilters}
        >
          필터 초기화
        </button>
      )}

      {filteredResidents.length > 0 ? (
        <ResidentList residents={filteredResidents} />
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
}

export default App;
