import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import blogimg1 from '@/public/img/blog img.webp'
import blogimg2 from '@/public/img/blog1.webp'
import blogimg3 from '@/public/img/blog2.webp'
import blogimg4 from '@/public/img/blog3.webp'

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container flex">
      <Slider {...settings}>
      <Image src={blogimg1} width={350} height={220} alt={'img'} />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
