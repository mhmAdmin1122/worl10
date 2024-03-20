import React from "react";
import Slider from "react-slick";
import TeamCard from "../T/TeamCard";

function Responsive() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="casestudy-slider  w-full">
      <Slider {...settings} className="flex justify-center items-center pl-4 slider">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </Slider>
    </div>
  );
}

export default Responsive;
