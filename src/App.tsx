import "./styles/App.scss";

type Resident = {
  name: string;
  area: string;
  role: string;
  level: string;
  status: string;
  reviewStatus: string;
  registeredAt: string;
};

const resident: Resident = {
  name: "모리",
  area: "동쪽 마을",
  role: "정원 관리",
  level: "숙련",
  status: "활동중",
  reviewStatus: "확인대기",
  registeredAt: "2026-05-28",
};

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <h1>슬기로운 마을 생활</h1>
        <p>마을 주민 관리 화면을 만들어봅니다.</p>
      </header>

      <section className="resident-card">
        <div className="resident-card__header">
          <h2>{resident.name}</h2>
          <span>{resident.status}</span>
        </div>

        <div className="resident-card__body">
          <p>구역: {resident.area}</p>
          <p>역할: {resident.role}</p>
          <p>등급: {resident.level}</p>
          <p>검토상태: {resident.reviewStatus}</p>
          <p>등록일: {resident.registeredAt}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
