import Card from "./Card";
const Populars = ({ movieInfo }) => {
  let imgArray = movieInfo.slice(0, -10);
  console.log(imgArray);
  return (
    <div className="flex flex-wrap">
      {imgArray.map((part) => (
        <Card
          key={part.id}
          src={part.poster_path}
          movieId={part.id}
          title={part.title}
        />
      ))}
    </div>
  );
};
export default Populars;
