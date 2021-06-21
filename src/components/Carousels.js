import React from "react";
import Slider from "react-slick";
import CarouselContent from "./CarouselContent";
import CarouselInfo from "./CarouselInfo";
import { useState, useEffect } from "react";

const Carousels = ({ movieInfo }) => {
  let imgArray = movieInfo.slice(0, -15);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 40000,
    cssEase: "linear",
  };
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    window.innerWidth > 1720 ? setIsDesktop(true) : setIsDesktop(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize());
  });

  return (
    <div
      className="bg-black max-w-auto mx-auto px-8"
      style={{ maxHeight: "500px" }}
    >
      <h2>Auto Play</h2>

      <Slider className="relative " {...settings}>
        {imgArray.map((part) => (
          <React.Fragment key={part.id}>
            <CarouselContent src={part.backdrop_path} />
            {/* short circuit aca */}
            {isDesktop ? (
              <CarouselInfo
                movieId={part.id}
                title={part.title}
                overview={part.overview}
              />
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};
export default Carousels;
