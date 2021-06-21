import Carousels from "./Carousels";
import MovieList from "./MovieList";
import arrow from "./img/arrow.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=eafc0da50e46a0fe474daa07b094c302`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results);
      });
  }, []);

  return (
    <div className="bg-black">
      <section>
        <Carousels movieInfo={latest} />
      </section>

      <section className="max-w-auto mx-auto ">
      {/* no esta bien aca el h1 */}
        <h1
          className="text-white text-3xl
       pt-6 mt-16 font-bold flex"
          style={{ marginLeft: "2%" }}
        >
          Most Populars Movies
          <Link to="/most-populars">
            <img className="pl-3" src={arrow} alt="see more" />
          </Link>
        </h1>
        {/* por que -10 aca para el slice? el modelo avanzado usa 5 */}
        <MovieList type="popular" landing="/most-populars" length="-10" />

        <h1
          className="text-white text-3xl
       pt-6 mt-16 font-bold flex"
          style={{ marginLeft: "2%" }}
        >
          New Releases
          <Link to="/releases">
            <img className="pl-3" src={arrow} alt="see more" />
          </Link>
        </h1>
        <MovieList type="upcoming" length="-10" />
      </section>
    </div>
  );
};
export default Home;
