import "./App.css";
import Home from "./components/Home";
import Releases from "./components/Releases";
import Populars from "./components/Populars";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Movie from "./components/Movie";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black max-w-auto mx-auto px-8">
        <Nav />
        <Home />
      </div>
      <Route exact path="/home" component={Home} />
      <Route exact path="/releases" component={Releases} />
      <Route exact path="/most-populars" component={Populars} />
      <Route exact path="/search" component={Search} />
      <Route path="/movie" component={Movie} />
    </BrowserRouter>
  );
};

export default App;
