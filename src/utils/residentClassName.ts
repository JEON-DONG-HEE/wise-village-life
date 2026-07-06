import type { ResidentStatus, ReviewStatus } from "../types/resident";

export const getStatusClassName = (status: ResidentStatus) => {
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

export const getReviewClassName = (reviewStatus: ReviewStatus) => {
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
