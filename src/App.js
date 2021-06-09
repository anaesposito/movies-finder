import "./App.css";
import Home from "./components/Home";
import Releases from "./components/Releases";
import Populars from "./components/Populars";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Movie from "./components/Movie";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import SidenavPage from "./components/SidenavPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black max-w-auto mx-auto px-8">
        <BrowserView>
          <Nav />
        </BrowserView>
        <MobileView>
          <SidenavPage />
        </MobileView>
      </div>

      <Route exact path="/movies-finder" component={Home} />
      <Route exact path="/releases" component={Releases} />
      <Route exact path="/most-populars" component={Populars} />
      <Route exact path="/search" component={Search} />
      {/* <Route path="/movie" component={Movie} />
      <Route path="/movie" component={MovieInfo} /> */}
      <Switch>
        <Route path="/movie/:movieId" children={<Movie />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
