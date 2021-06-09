import Carousels from "./Carousels";
import MovieList from "./MovieList";
import Footer from "./Footer";

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

      <section className="max-w-auto mx-auto px-8">
        <MovieList
          title="Most Populars Movies"
          type="popular"
          landing="/most-populars"
          length="-10"
        />
        <MovieList
          title="New Releases"
          type="upcoming"
          landing="/releases"
          length="-10"
        />
      </section>
      <Footer />
    </div>
  );
};
export default Home;
