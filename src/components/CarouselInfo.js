import { Link } from "react-router-dom";
const CarouselInfo = ({ movieId, title, overview }) => {
  return (
    <div
      className="w-3/4 absolute top-1/2 z-10 h-3/5"
      data-movie-id={movieId}
      style={{ paddingLeft: "1.3%" }}
    >
      <div
        className="bg-gray-800 bg-opacity-70  absolute sm:max-w-7xl max-w-sm p-10 flex flex-wrap justify-center"
        style={{ padding: "40px" }}
      >
        <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">
          {title}
        </h3>
        <p className=" mt-2 text-white ">{overview}</p>

        <Link to={`/movie/${movieId}`}>
          <button className=" transform hover:scale-110 motion-reduce:transform-none mt-4 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded">
            {" "}
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarouselInfo;
