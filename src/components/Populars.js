import MovieList from "./MovieList";

const Populars = () => {
  return (
    <div className="bg-black w-screen h-auto pt-9">
      <h1 className="text-6xl text-white font-bold text-center">
        Most Populars Movies
      </h1>
      <MovieList
        title="Most Populars Movies"
        type="popular"
        landing={false}
        length="20"
      />
    </div>
  );
};

export default Populars;
