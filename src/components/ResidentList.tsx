import type { Resident } from "../types/resident";
import ResidentCard from "./ResidentCard";

type ResidentListProps = {
  residents: Resident[];
};

function ResidentList({ residents }: ResidentListProps) {
  return (
    <div className="resident-list">
      {residents.map((resident) => (
        <ResidentCard key={resident.id} resident={resident} />
      ))}
    </div>
  );
}

export default ResidentList;
