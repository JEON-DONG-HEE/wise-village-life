import type { Resident } from "../types/resident";
import {
  getReviewClassName,
  getStatusClassName,
} from "../utils/residentClassName";

type ResidentCardProps = {
  resident: Resident;
  isSelected: boolean;
  onSelectResident: (residentId: number) => void;
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
