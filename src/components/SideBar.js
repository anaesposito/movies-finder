import { useState } from "react";

import { Link } from "react-router-dom";

const SideBar = ({ isOpenSide }) => {
  const [isOpen, setIsOpen] = useState(isOpenSide);

  const handleClick = () => {
    setIsOpen(false);
  };

  const classNameIfOpen = isOpen
    ? "h-screen bg-gray-800 absolute top-0 z-20 w-screen flex flex-row  justify-end translate-x-0"
    : " h-screen bg-gray-800 absolute top-0 z-20 w-screen flex justify-end transition-transform duration-500 transform -translate-x-full";

  return (
    <div>
      <div className={classNameIfOpen}>
        <div className="mr-2 mt-2">
          <button onClick={handleClick}>
            <img
              alt="movie clapperboard"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/macos-close.png"
            />
          </button>
        </div>
      </div>
           {/* si no vas a retornar nada en la segunda condicion, mejor usar short-circuit: isOpen && <codigo> */}
      {isOpen ? (
        <div className="z-40 absolute ml-16 mt-14 ">
          <ul>
          {/* Cada uno de estos LI podria ser un componente, eso ayudaria a que el codigo sea mas legible */}
            <li>
              <Link to="/movies-finder" onClick={handleClick}>
              {/* un solo h1 por pagina!! los h1 no son elementos de menu, son el titulo mas importante de tu web! */}
                <h1 className="text-white text-xl font-bold ">Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/releases" onClick={handleClick}>
                <h1 className="text-white text-xl font-bold mt-9">Releases</h1>
              </Link>
            </li>
            <li>
              <Link to="/most-populars" onClick={handleClick}>
                <h1 className="text-white text-xl font-bold mt-9">
                  Most Populars
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/search" onClick={handleClick}>
                <h1 className="text-white text-xl font-bold mt-9">Search</h1>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default SideBar;
