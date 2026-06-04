type SearchBoxProps = {
  keyword: string;
  onChangekeyword: (value: string) => void;
};

function SearchBox({ keyword, onChangekeyword }: SearchBoxProps) {
  return (
    <div className="search-area">
      <input
        type="text"
        placeholder="주민명을 검색하세요"
        value={keyword}
        onChange={(event) => onChangekeyword(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
