import MovieList from "./MovieList";

const Releases = () => {
  return (
    <div className="bg-black w-screen h-auto pt-9">
      <h1 className="text-6xl text-white font-bold text-center">
        New Releases
      </h1>
      <MovieList
        title="New Releases"
        type="upcoming"
        landing={false}
        length="20"
      />
    </div>
  );
};

export default Releases;
