import type { Resident } from "../types/resident";
import {
  getReviewClassName,
  getStatusClassName,
} from "../utils/residentClassName";

type SelectedResidentPanelProps = {
  selectedResident: Resident | null;
  onClearSelectedResident: () => void;
};

function SeletedResidentPanel({
  selectedResident,
  onClearSelectedResident,
}: SelectedResidentPanelProps) {
  return (
    <div className="selected-resident">
      <div className="selected-resident__header">
        <strong>선택된 주민</strong>

        {selectedResident && (
          <button type="button" onClick={onClearSelectedResident}>
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
            <span
              className={`status-badge ${getStatusClassName(selectedResident.status)}`}
            >
              {selectedResident.status}
            </span>
          </p>
          <p className="selected-resident__info-row">
            <span className="selected-resident__label">검토상태</span>
            <span
              className={`review-badge ${getReviewClassName(selectedResident.reviewStatus)}`}
            >
              {selectedResident.reviewStatus}
            </span>
          </p>
          <p className="selected-resident__info-row">
            <span className="selected-resident__label">등록일</span>
            <span>{selectedResident.registeredAt}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default SeletedResidentPanel;
