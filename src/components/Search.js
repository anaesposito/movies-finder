import { useState, useEffect } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSearch(searchValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          value={searchValue}
          placeholder="Search for movies"
        />
      </form>
    </div>
  );
};

export default Search;
