import type { AreaFilterType, FilterStatus, Resident } from "../types/resident";

type FilterResidentsOptions = {
  keyword: string;
  selectedStatus: FilterStatus;
  selectedArea: AreaFilterType;
};

export const filterResidents = (
  residents: Resident[],
  options: FilterResidentsOptions,
) => {
  // const keyword = options.keyword;
  // const selectedStatus = options.selectedStatus;
  // const selectedArea = options.selectedArea;

  const { keyword, selectedStatus, selectedArea } = options; // 구조분해 할당(위의 세줄과 같음)

  return residents.filter((resident) => {
    const isMatchedKeyword = resident.name.includes(keyword);
    const isMatchedStatus =
      selectedStatus === "전체" || resident.status === selectedStatus;
    const isMachedArea =
      selectedArea === "전체" || resident.area === selectedArea;

    return isMatchedKeyword && isMatchedStatus && isMachedArea;
  });
};
