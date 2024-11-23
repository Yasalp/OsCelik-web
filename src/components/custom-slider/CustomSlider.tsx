import React from "react";
import Slider from "react-slick";
import "./CustomSlider.css";
import logo from "../../assets/logo.png";
import instegram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import telephone from "../../assets/telephone-call.png";

interface CustomSliderProps {
  images: [{ id: number; src: string; alt: string }];
}

const CustomSlider = ({ images }: CustomSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
