import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ModalPage from "./ModalPage";

const Movie = () => {
  let { movieId } = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [movieBg, setMovieBg] = useState("");
  const [moviePic, setMoviePic] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=eafc0da50e46a0fe474daa07b094c302`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieBg(
          `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
        );
        setMoviePic(`https://image.tmdb.org/t/p/original/${data.poster_path}`);
        setMovieDetail(data);
        setGenres(data.genres);
      });
  }, [movieId]);

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `${movieBg}`,
      }}
    >
      <div className=" bg-gray-900  bg-opacity-70 w-full h-full flex flex-row  sm:flex-nowrap pt-9 pb-9">
        <div className="flex flex-row flex-wrap sm:flex-nowrap  text-white font-bold w-2/3 sm:pt-16  justify-center text-center sm:text-justify m-auto">
          <img
            alt="poster of the movie"
            src={moviePic}
            className="w-full sm:w-1/2 sm:p-10 h-auto object-center object-cover"
          />
          <div className="flex flex-col pt-9">
            <h1 className="font-bold text-3xl">{movieDetail.title} </h1>

            <span className="text-lg font-bold">
            {/* {movieDetail.release_date && movieDetail.release_date.slice(0, 4)} */}
              {movieDetail.release_date
                ? movieDetail.release_date.slice(0, 4)
                : ""}
            </span>

            <p className="text-base font-normal pt-9">{movieDetail.overview}</p>
            <h6 className="pt-5">Genres</h6>

            {genres.map((part, i) => (
              <ul key={i}>
                <li>
                {/* {part.name && <p className="text-base font-normal">{part.name}</p>} */}
                  {part.name ? (
                    <p className="text-base font-normal">{part.name}</p>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            ))}

            <ModalPage movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
