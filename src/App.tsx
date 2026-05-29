import "./styles/App.scss";

type ResidentStatus = "활동중" | "휴식중" | "대기중"; // 세가지 값만 들어올 수 있다. 유니온 타입이라고 함
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

const getStatusClassName = (status: ResidentStatus) => {
  if (status === "활동중") {
    return "status-badge--active";
  }
  if (status === "휴식중") {
    return "status-badge--rest";
  }
  if (status === "대기중") {
    return "status-badge--waiting";
  }

  return "";
};

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <h1>슬기로운 마을 생활</h1>
        <p>마을 주민 관리 화면을 만들어봅니다.</p>
      </header>

      <div className="resident-list">
        {residents.map((resident) => (
          <section className="resident-card" key={resident.id}>
            {/* React 에서 목록을 만들 때는 반복되는 각 요소에 key 를 줘야 함 */}
            <div className="resident-card__header">
              <h2>{resident.name}</h2>
              <span
                className={`status-badge ${getStatusClassName(resident.status)}`}
              >
                {resident.status}
              </span>
            </div>
            <div className="resident-card__body">
              <p>구역: {resident.area}</p>
              <p>역할: {resident.role}</p>
              <p>등급: {resident.level}</p>
              <p>검토상태: {resident.reviewStatus}</p>
              <p>등록일: {resident.registeredAt}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
