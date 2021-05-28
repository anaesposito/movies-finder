import "./App.css";
import Home from "./components/Home";
import Populars from "./components/Populars";
import Releases from "./components/Releases";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Carousels from "./components/Carousels";
import Card from "./components/Card";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
  // let carouselsImg = "";

  return (
    <BrowserRouter>
      <div className="bg-black max-w-auto mx-auto px-8">
        <Nav />

        <div>
          <Carousels imgId={latest} />
        </div>
        <Card className="mt-9 flex" />
        <Route path="/home" component={Home} />
        <Route path="/releases" component={Releases} />
        <Route path="/most-populars" component={Populars} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  );
};

export default App;
