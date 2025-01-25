import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface CustomSliderProps {
  slides: Slide[];
}

const CustomSlider = ({ slides }: CustomSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <h2 className="slide-title">{slide.title}</h2>
            <img
              src={slide.image}
              alt="Not found image"
              className="slider-image"
            />
            <p className="slide-description">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
