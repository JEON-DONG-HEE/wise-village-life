import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import StatusFilter from "./components/StatusFilter";
import AreaFilter from "./components/AreaFilter";
import SortButtons from "./components/SortButtons";
import EmptyMessage from "./components/EmptyMessage";
import ResidentList from "./components/ResidentList";
import FilterSummary from "./components/FilterSummary";
import SeletedResidentPanel from "./components/SeletedResidentPanel";

import { residents } from "./data/residents";
import type { AreaFilterType, FilterStatus, SortOrder } from "./types/resident";
import { filterResidents } from "./utils/residentsFilter";
import { sortResidentsByRegisteredAt } from "./utils/residentSort";
import "./styles/App.scss";

function App() {
  // 상태값
  const [keyword, setKeyword] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>("전체");
  const [selectedArea, setSelectedArea] = useState<AreaFilterType>("전체");
  const [sortOrder, setSortOrder] = useState<SortOrder>("latest");
  const [selectedResidentId, setSelectedResidentId] = useState<number | null>(
    null,
  );

  // 필터 계산
  const trimmedKeyword = keyword.trim(); // 검색어에 공백만 있을 경우 예외처리
  const filteredResidents = filterResidents(residents, {
    keyword: trimmedKeyword,
    selectedStatus,
    selectedArea,
  });

  const sortedResidents = sortResidentsByRegisteredAt(
    filteredResidents,
    sortOrder,
  );

  const isFiltered =
    trimmedKeyword !== "" ||
    selectedStatus !== "전체" ||
    selectedArea !== "전체" ||
    sortOrder !== "latest";

  const selectedResident =
    residents.find(
      // 화면 표시용 계산값
      (resident) => resident.id === selectedResidentId,
    ) ?? null;

  const isSelectedResidentVisible = filteredResidents.some(
    // 상태 정리용 계산값
    (resident) => resident.id === selectedResidentId, // some : 조건에 맞는 항목이 하나라도 있으면 true 를 반환
  );

  useEffect(() => {
    if (selectedResidentId !== null && !isSelectedResidentVisible) {
      setSelectedResidentId(null);
    }
  }, [selectedResidentId, isSelectedResidentVisible]);

  // 이벤트 함수
  const handleResetFilters = () => {
    setKeyword("");
    setSelectedStatus("전체");
    setSelectedArea("전체");
    setSortOrder("latest");
  };

  const handleClearSelectedResident = () => {
    setSelectedResidentId(null);
  };

  return (
    <div className="app">
      <header className="page-header">
        <h1>슬기로운 마을 생활</h1>
        <p>마을 주민 관리 화면을 만들어봅니다.</p>
      </header>

      <div className="control-panel">
        <SearchBox keyword={keyword} onChangeKeyword={setKeyword} />
        <StatusFilter
          selectedStatus={selectedStatus}
          onChangeStatus={setSelectedStatus}
        />
        <AreaFilter
          selectedArea={selectedArea}
          onChangeArea={setSelectedArea}
        />

        <SortButtons sortOrder={sortOrder} onChangeSortOrder={setSortOrder} />
      </div>

      <FilterSummary
        totalCount={residents.length}
        filteredCount={filteredResidents.length}
        keyword={trimmedKeyword}
        selectedStatus={selectedStatus}
        selectedArea={selectedArea}
        sortOrder={sortOrder}
        isFiltered={isFiltered}
        onResetFilters={handleResetFilters}
      />

      <SeletedResidentPanel
        selectedResident={selectedResident}
        onClearSelectedResident={handleClearSelectedResident}
      />

      <div className="resident-form">
        <h2>새 주민 등록</h2>
      </div>

      {sortedResidents.length > 0 ? (
        <ResidentList
          residents={sortedResidents}
          selectedResidentId={selectedResidentId}
          onSelectResident={setSelectedResidentId}
        />
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
}

export default App;
