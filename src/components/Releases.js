import MovieList from "./MovieList";

const Releases = () => {
  return (
    <div className="bg-black w-screen h-auto pt-9">
    {/* esto deberia ser un h2, no es el titulo principal de tu web */}
      <h1 className="sm:text-sm md:text-5xl text-white font-bold text-center">
        New Releases
      </h1>
      <MovieList type="upcoming" length="20" />
    </div>
  );
};

export default Releases;
