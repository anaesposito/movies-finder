import Card from "./Card";

const MovieListDisplay = ({ imgArray }) => {
  return (
    <div className="flex flex-wrap  justify-center ">
      {imgArray.map((part) => (
        <Card
          key={part.id}
          src={part.poster_path}
          title={part.title}
          movieId={part.id}
        />
      ))}
    </div>
  );
};
export default MovieListDisplay;
