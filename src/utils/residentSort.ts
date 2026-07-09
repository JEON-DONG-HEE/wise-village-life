import type { Resident, SortOrder } from "../types/resident";

export const sortResidentsByRegisteredAt = (
  residents: Resident[],
  sortOrder: SortOrder,
) => {
  const copiedResidents = [...residents];

  return copiedResidents.sort((a, b) => {
    if (sortOrder === "latest") {
      return b.registeredAt.localeCompare(a.registeredAt);
    }

    return a.registeredAt.localeCompare(b.registeredAt);
  });
};
