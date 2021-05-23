import "./App.css";
import Home from "./components/Home";
import Populars from "./components/Populars";
import Releases from "./components/Releases";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Carousels from "./components/Carousels";
import Card from "./components/Card";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black max-w-auto mx-auto px-8">
        <Nav />
        <Carousels />
        <Card />
        <Route path="/home" component={Home} />
        <Route path="/releases" component={Releases} />
        <Route path="/most-populars" component={Populars} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  );
};

export default App;
