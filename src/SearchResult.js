const SearchResult = ({ searchQuery }) => {
  const handleSearch = (query) => {
    searchQuery(query);
  };

  return (
    <>
      <input
        type={"search"}
        placeholder={"Search some emoji's"}
        onChange={() => handleSearch(event.target.value)}
      />
    </>
  );
};

export default SearchResult;
