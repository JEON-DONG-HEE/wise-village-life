import type { Resident } from "../types/resident";

type ResidentListProps = {
  residents: Resident[];
};

function ResidentList({ residents }: ResidentListProps) {
  return <div>주민 목록</div>;
}

export default ResidentList;
