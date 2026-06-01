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

type ResidentCardProps = {
  resident: Resident;
};

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

const getReviewClassName = (reviewStatus: ReviewStatus) => {
  if (reviewStatus === "확인대기") {
    return "review-badge--pending";
  }
  if (reviewStatus === "확인완료") {
    return "review-badge--complete";
  }
  if (reviewStatus === "반려") {
    return "review-badge--rejected";
  }

  return "";
};

function ResidentCard({ resident }: ResidentCardProps) {
  return (
    <section className="resident-card">
      <div className="resident-card__header">
        <h2>{resident.name}</h2>
        <span className={`status-badge ${getStatusClassName(resident.status)}`}>
          {resident.status}
        </span>
      </div>
      <div className="resident-card__body">
        <p>구역: {resident.area}</p>
        <p>역할: {resident.role}</p>
        <p>등급: {resident.level}</p>
        <p>
          검토상태:{" "}
          <span
            className={`review-badge ${getReviewClassName(resident.reviewStatus)}`}
          >
            {resident.reviewStatus}
          </span>
        </p>
        <p>등록일: {resident.registeredAt}</p>
      </div>
    </section>
  );
}

export default ResidentCard;
