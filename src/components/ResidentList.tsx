import type { Resident } from "../types/resident";
import ResidentCard from "./ResidentCard";

type ResidentListProps = {
  residents: Resident[];
  selectedResidentId: number | null;
  onSelectResident: (residentId: number) => void;
};

function ResidentList({
  residents,
  selectedResidentId,
  onSelectResident,
}: ResidentListProps) {
  return (
    <div className="resident-list">
      {residents.map((resident) => (
        <ResidentCard
          key={resident.id}
          resident={resident}
          isSelected={resident.id === selectedResidentId}
          onSelectResident={onSelectResident}
        />
      ))}
    </div>
  );
}

export default ResidentList;
