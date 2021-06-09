import movie from "./img/movie.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-black dark:bg-gray-800  shadow ">
        <div className=" mx-auto" style={{ marginLeft: "2%" }}>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img className="h-8 w-8" src={movie} alt="movie clapperboard" />

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/movies-finder"
                    className="text-gray-300 transform hover:bg-gradient-to from-yellow-400 via-red-500 to-pink-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/releases"
                    className="text-gray-300 dark:text-white   hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Releases
                  </Link>
                  <Link
                    to="/most-populars"
                    className="text-gray-300  hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Most Populars
                  </Link>
                  <Link
                    to="/search"
                    className="text-gray-300   hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
