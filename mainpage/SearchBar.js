import SearchBarCSS from "/mainpage/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="row mb-5 container-of-search-bar" style={SearchBarCSS}>
      <input
        type="search"
        className="mx-auto mt-4"
        placeholder="Caută un articol..."
        spellCheck="false"
        maxLength="50"
      />
    </div>
  );
}
