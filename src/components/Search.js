import { useState, useEffect } from "react";
import MovieListDisplay from "./MovieListDisplay";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userSearch, setUserSearch] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    setUserSearch(searchValue);
  };
  const fetchAction = () => {
    // esta funcion no deberia retornar el fetch, solo ejecutarlo 
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=eafc0da50e46a0fe474daa07b094c302&language=en-US&page=1&include_adult=false&query=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserSearch(data.results);
      });
  };

  useEffect(() => {
    if (searchValue) {
      fetchAction();
    }
  }, [searchValue]);

  return (
    <div>
      <div className=" w-1/2 max-h-40 flex mt-16 bg-black h-screen text-center m-auto">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="w-full text-center rounded-full p-3"
            type="search"
            onChange={handleChange}
            value={searchValue}
            placeholder="Search for movies"
          />{" "}
        </form>
      </div>

      {searchValue ? (
        <div>
        {/* decime que es el ultimo h1 que voy a ver :( */}
          <h1 className="text-6xl text-white font-bold text-center">
            {" "}
            Results
          </h1>{" "}
          <MovieListDisplay imgArray={userSearch} />{" "}
        </div>
      ) : (
        <div className="bg-black h-screen"></div>
      )}
    </div>
  );
};

export default Search;
