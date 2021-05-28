const CarouselContent = ({ src }) => {
  return (
    <img
      className=""
      style={{ maxHeight: "500px", width: "80%", marginLeft: "10%" }}
      src={`https://image.tmdb.org/t/p/original/${src}`}
      alt="movie backdrop"
    />
  );
};
export default CarouselContent;
