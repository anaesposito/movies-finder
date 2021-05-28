import "./Card.scss";
const Card = () => {
  return (
    <div className="flex justify-center mt-9 pt-9">
      <div className=" flex py-3 sm:max-w-sm sm:mx-auto">
        <div className=" flex px-1 py-1 bg-white shadow-lg sm:rounded-2xl sm:p-3">
          <div className="max-w-md mx-auto">
            <div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_UX182_CR0,0,182,268_AL_.jpg"
                alt="img test"
                className="w-full h-auto object-center m-auto sm:h-auto"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-2 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7"></div>
              <div className="pt-1 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Titulo de pelicula aqui</p>
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
