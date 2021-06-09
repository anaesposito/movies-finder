import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  let { movieId } = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [movieBg, setMovieBg] = useState("");
  const [moviePic, setMoviePic] = useState("");

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
      });
  }, [movieId]);

  return (
    <div
      className="bg-cover bg-center  w-screen h-screen"
      style={{
        backgroundImage: `${movieBg}`,
      }}
    >
      <div className=" bg-gray-900  bg-opacity-70 w-screen h-screen">
        <div className="flex flex-row text-white font-bold w-2/3 pt-16 justify-center m-auto">
          <img
            alt="poster of the movie"
            src={moviePic}
            className="w-1/3 h-auto p-9"
          />
          <div className="flex flex-col pt-9">
            <h1 className="font-bold text-3xl">
              {movieDetail.title}{" "}
              <span className="text-lg font-bold pl-3">
                ({movieDetail.release_date.slice(0, 4)})
              </span>
            </h1>
            <p className="text-base font-normal pt-9">{movieDetail.overview}</p>
            <ul>
              <h6 className="pt-5">Genres</h6>
              <li>
                <p className="text-base font-normal">
                  • {movieDetail.genres[0].name}
                </p>
              </li>
              <li>
                <p className="text-base font-normal">
                  • {movieDetail.genres[1].name}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
