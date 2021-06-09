import { useState } from "react";
import { Link } from "react-router-dom";
import movie from "./img/movie.png";

export const SidenavPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="pt-9"
        type="button"
        aria-disabled={isOpen}
        disabled={isOpen}
        onClick={toggle}
      >
        <img className="h-8 w-8" src={movie} alt="movie clapperboard" />
      </button>
      <Sidenav isOpen={isOpen} toggle={toggle}>
        <Sidenav.Item>
          <Link to="/movies-finder" /> Home
        </Sidenav.Item>
        <Sidenav.Item>
          <Link to="/releases" /> Releases
        </Sidenav.Item>
        <Sidenav.Item>
          <Link to="/most-populars" /> Most Populars
        </Sidenav.Item>
        <Sidenav.Item>
          <Link to="/search" /> Search
        </Sidenav.Item>
      </Sidenav>
    </>
  );
};

const style = {
  sidenav: {
    open: `w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden`,
    close: `w-0 bg-gray-800 text-white overflow-x-hidden`,
    default: `h-screen fixed z-20 top-0 left-0 transition-all ease duration-200`,
  },
  item: `flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-8 mb-10`,
  closeIcon: `absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer`,
};

const Sidenav = ({ isOpen, toggle, children }) => {
  return (
    <aside
      className={`${isOpen ? style.sidenav.open : style.sidenav.close} 
      ${style.sidenav.default}`}
    >
      <button aria-label="Close" className={style.closeIcon} onClick={toggle}>
        &times;
      </button>
      <div className="mt-12">{children}</div>
    </aside>
  );
};

Sidenav.Item = ({ children, href }) => (
  <a href={href} className={style.item}>
    {children}
  </a>
);

export default SidenavPage;
