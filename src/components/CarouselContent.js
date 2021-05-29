import CarouselInfo from "./CarouselInfo";

const CarouselContent = ({ src, movieId, title, overview }) => {
  return (
    <div
      className="relative"
      style={{
        height: "600px",
        width: "1300px",
      }}
    >
      <img
        style={{
          height: "600px",
          width: "1300px",
        }}
        className="object-cover w-screen h-full"
        src={`https://image.tmdb.org/t/p/original/${src}`}
        alt="movie backdrop"
      />
      <CarouselInfo movieId={movieId} title={title} overview={overview} />
    </div>
  );
};
export default CarouselContent;
