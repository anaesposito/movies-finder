import "./Card.scss";
const Card = ({ src, title }) => {
  return (
    <div
      className="flex justify-center m-4 mt-9 pt-9 "
      style={{ width: "200px", height: "auto" }}
    >
      <div className=" flex py-3 sm:max-w-sm sm:mx-auto">
        <div className=" flex px-1 py-1 bg-white shadow-lg sm:rounded-2xl sm:p-3">
          <div className="max-w-md mx-auto">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${src}`}
                alt="img test"
                className="w-full h-auto object-center object-cover m-auto sm:rounded-2xl sm:h-auto max-h-full"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-2 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7"></div>
              <div className="pt-1 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>{title}</p>
                <button
                  className="inline-flex items-center px-4 py-2 border 
                border-gray-300 rounded-md shadow-sm text-sm font-medium text-black
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gradient-to-bl from-blue-400 to-green-300 "
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
