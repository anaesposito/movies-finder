import { useEffect, useState } from "react";
import MovieListDisplay from "./MovieListDisplay";

const MovieList = ({ type, length }) => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=eafc0da50e46a0fe474daa07b094c302`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results.slice(0, length));
      });
  }, [type, length]);

  return <MovieListDisplay imgArray={latest} />;
};
export default MovieList;
