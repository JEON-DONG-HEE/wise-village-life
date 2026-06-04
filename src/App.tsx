import { useState } from "react";
import ResidentCard from "./components/ResidentCard";
import SearchBox from "./components/SearchBox";
import { residents } from "./data/residents";
import type { FilterStatus } from "./types/resident";
import "./styles/App.scss";

const statusFilters: FilterStatus[] = ["전체", "활동중", "휴식중", "대기중"];

function App() {
  const [keyword, setKeyword] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>("전체");
  const filteredResidents = residents.filter((resident) => {
    const isMatchedKeyword = resident.name.includes(keyword);
    const isMatchedStatus =
      selectedStatus === "전체" || resident.status === selectedStatus;

    return isMatchedKeyword && isMatchedStatus;
  });

  return (
    <div className="app">
      <header className="page-header">
        <h1>슬기로운 마을 생활</h1>
        <p>마을 주민 관리 화면을 만들어봅니다.</p>
      </header>

      <SearchBox keyword={keyword} onChangekeyword={setKeyword} />

      {/* <div className="search-area">
        <input
          type="text"
          placeholder="주민명을 검색하세요"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div> */}

      <div className="filter-area">
        {statusFilters.map((status) => (
          <button
            key={status}
            type="button"
            className={selectedStatus === status ? "is-active" : ""}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {filteredResidents.length > 0 ? (
        <div className="resident-list">
          {filteredResidents.map((resident) => (
            <ResidentCard key={resident.id} resident={resident} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <strong>검색 결과가 없습니다.</strong>
          <p>다른 주민명을 입력해보세요.</p>
        </div>
      )}
    </div>
  );
}

export default App;
