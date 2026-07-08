import type { SortOrder } from "../types/resident";

type SortButtonsProps = {
  sortOrder: SortOrder;
  onChangeSortOrder: (sortOrder: SortOrder) => void;
};

function SortButtons({ sortOrder, onChangeSortOrder }: SortButtonsProps) {
  return (
    <div className="filter-group">
      <p id="sort-button-title" className="filter-title">
        정렬
      </p>

      <div
        className="filter-area"
        role="group"
        aria-labelledby="sort-button-title"
      >
        <button
          type="button"
          className={sortOrder === "latest" ? "is-active" : ""}
          aria-pressed={sortOrder === "latest"}
          onClick={() => onChangeSortOrder("latest")}
        >
          최신 등록순
        </button>
        <button
          type="button"
          className={sortOrder === "oldest" ? "is-active" : ""}
          aria-pressed={sortOrder === "oldest"}
          onClick={() => onChangeSortOrder("oldest")}
        >
          오래된 등록순
        </button>
      </div>
    </div>
  );
}

export default SortButtons;
