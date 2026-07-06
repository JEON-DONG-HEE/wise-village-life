type SearchBoxProps = {
  keyword: string;
  onChangeKeyword: (value: string) => void;
};

function SearchBox({ keyword, onChangeKeyword }: SearchBoxProps) {
  return (
    <div className="search-area">
      <label htmlFor="resident-search">주민명 검색</label>
      <input
        id="resident-search"
        type="text"
        placeholder="주민명을 검색하세요"
        value={keyword}
        onChange={(event) => onChangeKeyword(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
