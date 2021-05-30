import React from "react";
import Card from "./Card";
import arrow from "./img/arrow.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopMovies = ({ title, type, landing }) => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=eafc0da50e46a0fe474daa07b094c302`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results);
      });
  }, [type]);
  let imgArray = latest.slice(0, -10);

  return (
    <div className="mt-9 pt-9">
      <h1
        className="text-white text-3xl
        pt-6 font-bold flex"
        style={{ marginLeft: "2%" }}
      >
        {title}
        <Link to={`${landing}`}>
          {" "}
          <img className="pl-3" src={arrow} alt="see more" />
        </Link>
      </h1>
      <div className="flex flex-wrap justify-center ">
        {imgArray.map((part) => (
          <Card
            key={part.id}
            src={part.poster_path}
            title={part.title}
            movieId={part.id}
          />
        ))}
      </div>
    </div>
  );
};
export default TopMovies;
