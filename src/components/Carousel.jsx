import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
const Carousel = () => {
  return (
    <div className="relative">
      <Splide options={{
        perPage: 4,
        gap: '1rem',
        pagination: false,
        arrows: true
      }}>
        <SplideSlide className="border h-40">Slide 1</SplideSlide>
        <SplideSlide className="border h-40">Slide 2</SplideSlide>
        <SplideSlide className="border h-40">Slide 3</SplideSlide>
        <SplideSlide className="border h-40">Slide 4</SplideSlide>
        <SplideSlide className="border h-40">Slide 5</SplideSlide>
        <SplideSlide className="border h-40">Slide 6</SplideSlide>
        {/* Add more SplideSlide components as needed */}
      </Splide>
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <button className="splide__arrow splide__arrow--prev" style={{ display: "block" }}>Prev</button>
        <button className="splide__arrow splide__arrow--next" style={{ display: "block" }}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
