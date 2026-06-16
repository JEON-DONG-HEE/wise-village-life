import type { Resident, ResidentStatus, ReviewStatus } from "../types/resident";

type ResidentCardProps = {
  resident: Resident;
  isSelected: boolean;
  onSelectResident: (residentId: number) => void;
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

function ResidentCard({
  resident,
  isSelected,
  onSelectResident,
}: ResidentCardProps) {
  return (
    <section className={`resident-card ${isSelected ? "is-selected" : ""}`}>
      <button
        type="button"
        className="resident-card__button"
        aria-pressed={isSelected}
        onClick={() => onSelectResident(resident.id)}
      >
        <div className="resident-card__header">
          <h2>{resident.name}</h2>
          <span
            className={`status-badge ${getStatusClassName(resident.status)}`}
          >
            {resident.status}
          </span>
        </div>
        <div className="resident-card__body">
          <p className="resident-card__info-row">
            <span className="resident-card__label">구역</span>
            <span>{resident.area}</span>
          </p>
          <p className="resident-card__info-row">
            <span className="resident-card__label">역할</span>
            <span>{resident.role}</span>
          </p>
          <p className="resident-card__info-row">
            <span className="resident-card__label">등급</span>
            <span>{resident.level}</span>
          </p>
          <p className="resident-card__info-row">
            <span className="resident-card__label">검토상태</span>
            <span
              className={`review-badge ${getReviewClassName(resident.reviewStatus)}`}
            >
              {resident.reviewStatus}
            </span>
          </p>
          <p className="resident-card__info-row">
            <span className="resident-card__label">등록일</span>
            <span>{resident.registeredAt}</span>
          </p>
        </div>
      </button>
    </section>
  );
}

export default ResidentCard;
