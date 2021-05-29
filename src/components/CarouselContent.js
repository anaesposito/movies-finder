const CarouselContent = ({ src }) => {
  return (
    <div>
      <img
        className="object-cover w-full"
        style={{
          maxHeight: "500px",
        }}
        src={`https://image.tmdb.org/t/p/original/${src}`}
        alt="movie backdrop"
      />
    </div>
  );
};
export default CarouselContent;
