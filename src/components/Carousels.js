import React from "react";
import Slider from "react-slick";
import CarouselContent from "./CarouselContent";
import CarouselInfo from "./CarouselInfo";

const Carousels = ({ imgId }) => {
  let imgArray = imgId.slice(0, -15);
  console.log(imgArray);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 22000,
    autoplaySpeed: 24000,
    cssEase: "linear",
  };

  return (
    <div className="w-auto" style={{ maxHeight: "500px" }}>
      <h2>Auto Play</h2>

      <Slider className="w-auto " {...settings}>
        {imgArray.map((part) => (
          <React.Fragment key={part.id}>
            <CarouselContent src={part.backdrop_path} />
            <CarouselInfo
              className=""
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
