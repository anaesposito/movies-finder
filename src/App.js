import "./App.css";
import Home from "./components/Home";
import Releases from "./components/Releases";
import Populars from "./components/Populars";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MobileMenu from "./components/MobileMenu";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 720 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize());
  });

  return (
    <BrowserRouter>
      <div className="bg-black max-w-auto mx-auto">
        {isMobile ? <MobileMenu /> : <Nav />}

        <Route exact path="/movies-finder" component={Home} />
        <Route exact path="/releases" component={Releases} />
        <Route exact path="/most-populars" component={Populars} />
        <Route exact path="/search" component={Search} />

        <Switch>
          <Route path="/movie/:movieId" children={<Movie />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
