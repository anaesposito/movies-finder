import "./App.css";
import Home from "./components/Home";
import Populars from "./components/TopMovies";
import Releases from "./components/Releases";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Carousels from "./components/Carousels";

import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import TopMovies from "./components/TopMovies";
const App = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=eafc0da50e46a0fe474daa07b094c302`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black max-w-auto mx-auto px-8">
        <Nav />

        <section>
          <Carousels movieInfo={latest} />
        </section>

        <section>
          <TopMovies movieInfo={latest} title="Most Populars Movies" />
          <TopMovies movieInfo={latest} title="New Releases" />
        </section>

        <Route path="/home" component={Home} />
        <Route path="/releases" component={Releases} />
        <Route path="/most-populars" component={Populars} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  );
};

export default App;
