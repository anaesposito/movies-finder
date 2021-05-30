import Card from "./Card";
import arrow from "./img/arrow.png";

const TopMovies = ({ movieInfo, title }) => {
  let imgArray = movieInfo.slice(0, -14);
  console.log(imgArray);
  return (
    <div className="mt-9 pt-9">
      <h1
        className="text-white text-3xl
        pt-6 font-bold flex"
        style={{ marginLeft: "6%" }}
      >
        {title}
        <img className="pl-3" src={arrow} alt="see more" />
      </h1>
      <div className="flex flex-wrap justify-center md:space-x-20">
        {imgArray.map((part) => (
          <Card
            key={part.id}
            src={part.poster_path}
            movieId={part.id}
            title={part.title}
          />
        ))}
      </div>
    </div>
  );
};
export default TopMovies;
