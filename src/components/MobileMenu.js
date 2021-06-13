import movie from "./img/movie.png";

import SideBar from "./SideBar";
import { useState } from "react";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img className="m-2" src={movie} alt="movie clapperboard" />
      </button>
      {isOpen ? <SideBar isOpenSide={isOpen} /> : ""}
    </div>
  );
};
export default MobileMenu;
