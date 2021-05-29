const CarouselInfo = ({ movieId, title, overview }) => {
  console.log(movieId);
  return (
    <div
      className="bg-white relative z-10  h-3/5 text-center flex flex-wrap justify-center p-3"
      style={{ width: "500px" }}
      data-movie-id={movieId}
    >
      <h3 className="text-black">{title}</h3>
      <p className="text-black ">{overview}</p>
    </div>
  );
};

export default CarouselInfo;
