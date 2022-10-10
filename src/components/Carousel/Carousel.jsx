import React, { useState } from "react";
import {
  Wrapper,
  Slider,
  SliderButton,
  Image,
  Iphone,
  MockPhoneWrapper,
} from "./CarouselStyles";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import login_screen from "../../assets/login_screen.jpg";
import home_screen from "../../assets/home_screen.jpg";
import explore_screen from "../../assets/explore_screen.jpg";
import profile_screen from "../../assets/profile_screen.jpg";
import canvas_screen from "../../assets/canvas_screen.jpg";

import MockPhone from "../../assets/iphone-13.png";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { image: login_screen },
    { image: home_screen },
    { image: profile_screen },
    { image: explore_screen },
    { image: canvas_screen },
  ];

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const lastSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Wrapper>
      <Slider>
        <SliderButton>
          <ArrowBackIosOutlinedIcon onClick={lastSlide} />
        </SliderButton>
        <MockPhoneWrapper>
          <Iphone src={MockPhone} alt="" />
          {slides.map((slide, index) => {
            console.log({ slide });
            return index === current && <Image src={slide.image} alt="" />;
          })}
        </MockPhoneWrapper>
        <SliderButton>
          <ArrowForwardIosOutlinedIcon onClick={nextSlide} />
        </SliderButton>
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
