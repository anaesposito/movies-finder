import React from "react";
import Slider from "react-slick";
import CarouselContent from "./CarouselContent";
import CarouselInfo from "./CarouselInfo";

const Carousels = ({ movieInfo }) => {
  let imgArray = movieInfo.slice(0, -15);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="w-auto" style={{ maxHeight: "500px" }}>
      <h2>Auto Play</h2>

      <Slider className="w-auto " {...settings}>
        {imgArray.map((part, index) => (
          <React.Fragment key={part.id}>
            <CarouselContent className="" src={part.backdrop_path} />
            <CarouselInfo
              movieId={part.id}
              title={part.title}
              overview={part.overview}
            />
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};
export default Carousels;
