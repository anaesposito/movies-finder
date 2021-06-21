import { useEffect, useState } from "react";
import MovieListDisplay from "./MovieListDisplay";
import Releases from "./Releases";

const MovieList = ({ type, length }) => {
  // a este componente lo llaman tanto Popular como Releases, sin embargo el nombre de la variable
  // da la impreson de que son los ultimos lanzamientos. Busca un nombre mas adecuado
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
