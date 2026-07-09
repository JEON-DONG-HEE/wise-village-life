import type { SortOrder } from "../types/resident";

export const getSortOrderLabel = (sortOrder: SortOrder) => {
  if (sortOrder === "latest") {
    return "최신 등록순";
  }

  return "오래된 등록순";
};
