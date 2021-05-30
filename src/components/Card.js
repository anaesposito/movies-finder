import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ src, title, movieId }) => {
  return (
    <Link to={`/${movieId}`}>
      <div
        className="flex justify-center h-auto m-9 pt-2 transform hover:scale-110 motion-reduce:transform-none"
        style={{ width: "250px" }}
      >
        <div className=" flex py-3 sm:max-w-sm sm:mx-auto">
          <div
            className=" flex px-1 py-1  shadow-lg sm:rounded-2xl sm:p-3"
            style={{ backgroundColor: "rgb(26,26,26)" }}
          >
            <div className="max-w-md mx-auto">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${src}`}
                  alt="img test"
                  className="w-full h-auto object-center object-cover m-auto sm:rounded-2xl sm:h-auto max-h-full"
                />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-2 text-base leading-6 space-y-2 text-white sm:text-lg sm:leading-7"></div>
                <div className="pt-1 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p className="text-center text-white font-medium">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
