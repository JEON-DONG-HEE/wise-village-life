import { useState } from "react";
import "./styles/App.scss";
import ResidentCard from "./components/ResidentCard";

type ResidentStatus = "활동중" | "휴식중" | "대기중"; // 세가지 값만 들어올 수 있다. 유니온 타입이라고 함
type FilterStatus = "전체" | ResidentStatus;
type ReviewStatus = "확인대기" | "확인완료" | "반려";

type Resident = {
  id: number; // 목록을 만들 때는 각 데이터마다 고유값이 필요함, map() 으로 반복 출력할 때 필요함
  name: string;
  area: string;
  role: string;
  level: string;
  status: ResidentStatus;
  reviewStatus: ReviewStatus;
  registeredAt: string;
};

// residents 는 Resident 타입 객체들이 들어있는 배열이다
const residents: Resident[] = [
  {
    id: 1,
    name: "모리",
    area: "동쪽 마을",
    role: "정원 관리",
    level: "숙련",
    status: "활동중",
    reviewStatus: "확인대기",
    registeredAt: "2026-05-28",
  },
  {
    id: 2,
    name: "루나",
    area: "서쪽 마을",
    role: "도서 관리",
    level: "일반",
    status: "휴식중",
    reviewStatus: "확인완료",
    registeredAt: "2026-05-21",
  },
  {
    id: 3,
    name: "토리",
    area: "남쪽 마을",
    role: "창고 정리",
    level: "초급",
    status: "대기중",
    reviewStatus: "반려",
    registeredAt: "2026-05-18",
  },
];

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

      <div className="search-area">
        <input
          type="text"
          placeholder="주민명을 검색하세요"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

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
