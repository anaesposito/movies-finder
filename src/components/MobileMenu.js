import movie from "./img/movie.png";

import SideBar from "./SideBar";
import { useState } from "react";
const MobileMenu = () => {

  // este estado no se entera si cambia el isOpen dentro de SideBar, y por eso el comportamiento
  // de este componente es inconsistente. 
  // Deberias enviarle setIsOpen a SideBar como una prop
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>
      {/* este alt refleja adecuadamente este elemento? como sabe el usuario que usa 
      lector de pantalla que esto abre el menu? */}
        <img className="m-2" src={movie} alt="movie clapperboard" />
      </button>
      {/* podriamos decirlo mejor asi: {isOpen && <SideBar isOpenSide={isOpen} />} */}
      {isOpen ? <SideBar isOpenSide={isOpen} /> : ""}
    </div>
  );
};
export default MobileMenu;
