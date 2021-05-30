import Carousels from "./Carousels";
import TopMovies from "./TopMovies";
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
    <div>
      <section>
        <Carousels movieInfo={latest} />
      </section>

      <section>
        <TopMovies
          title="Most Populars Movies"
          type="popular"
          landing="/most-populars"
        />
        <TopMovies title="New Releases" type="upcoming" landing="/releases" />
      </section>
    </div>
  );
};
export default Home;
