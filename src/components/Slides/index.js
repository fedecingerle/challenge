import React from "react";
import Banner from "../Banner/index";
import Slider from "react-slick";
import "./style.scss";
function Slides(props) {
  const { slides } = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slidesContainer">
      <Slider {...settings}>
        {slides.map((item, key) => {
          return <Banner data={item} key={key} />;
        })}
      </Slider>
    </div>
  );
}

export default Slides;
