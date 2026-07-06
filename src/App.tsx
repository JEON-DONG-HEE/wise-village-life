import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import StatusFilter from "./components/StatusFilter";
import AreaFilter from "./components/AreaFilter";
import EmptyMessage from "./components/EmptyMessage";
import ResidentList from "./components/ResidentList";
import FilterSummary from "./components/FilterSummary";

import { residents } from "./data/residents";
import type { AreaFilterType, FilterStatus } from "./types/resident";
import "./styles/App.scss";

function App() {
  // 상태값
  const [keyword, setKeyword] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>("전체");
  const [selectedArea, setSelectedArea] = useState<AreaFilterType>("전체");
  const [selectedResidentId, setSelectedResidentId] = useState<number | null>(
    null,
  );

  // 필터 계산
  const trimmedKeyword = keyword.trim(); // 검색어에 공백만 있을 경우 예외처리

  const filteredResidents = residents.filter((resident) => {
    const isMatchedKeyword = resident.name.includes(trimmedKeyword);
    const isMatchedStatus =
      selectedStatus === "전체" || resident.status === selectedStatus;
    const isMatchedArea =
      selectedArea === "전체" || resident.area === selectedArea;

    return isMatchedKeyword && isMatchedStatus && isMatchedArea;
  });

  const isFiltered =
    trimmedKeyword !== "" ||
    selectedStatus !== "전체" ||
    selectedArea !== "전체";

  const selectedResident = residents.find(
    // 화면 표시용 계산값
    (resident) => resident.id === selectedResidentId,
  );

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
      </div>

      <FilterSummary
        totalCount={residents.length}
        filteredCount={filteredResidents.length}
        keyword={trimmedKeyword}
        selectedStatus={selectedStatus}
        selectedArea={selectedArea}
        isFiltered={isFiltered}
        onResetFilters={handleResetFilters}
      />

      <div className="selected-resident">
        <div className="selected-resident__header">
          <strong>선택된 주민</strong>

          {selectedResident && (
            <button type="button" onClick={handleClearSelectedResident}>
              선택 해제
            </button>
          )}
        </div>

        {selectedResident ? (
          <div className="selected-resident__name">{selectedResident.name}</div>
        ) : (
          <p className="selected-resident__empty">
            주민 카드를 선택하면 상세 정보가 표시됩니다.
          </p>
        )}

        {selectedResident && (
          <div className="selected-resident__detail">
            <p className="selected-resident__info-row">
              <span className="selected-resident__label">구역</span>
              <span>{selectedResident.area}</span>
            </p>
            <p className="selected-resident__info-row">
              <span className="selected-resident__label">역할</span>
              <span>{selectedResident.role}</span>
            </p>
            <p className="selected-resident__info-row">
              <span className="selected-resident__label">상태</span>
              <span>{selectedResident.status}</span>
            </p>
            <p className="selected-resident__info-row">
              <span className="selected-resident__label">검토상태</span>
              <span>{selectedResident.reviewStatus}</span>
            </p>
            <p className="selected-resident__info-row">
              <span className="selected-resident__label">등록일</span>
              <span>{selectedResident.registeredAt}</span>
            </p>
          </div>
        )}
      </div>

      {filteredResidents.length > 0 ? (
        <ResidentList
          residents={filteredResidents}
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
