import React, { useState, useEffect, useRef } from 'react';
import './ProductCarousel.css';
import Slider from "react-slick";

import { ArrowPrev, ArrowNext } from '../Slider/Arrows'

import ProductCarouselNavCard from '../Cards/ProductCarouselNavCard';


function ProductCarousel({ slidesData }) {
  const [mainCarousel, setMainCarousel] = useState(null);
  const mainCarouselRef = useRef(null)
  const navigationMainCarouselRef = useRef(null)

  useEffect(() => {
    setMainCarousel(mainCarouselRef.current);
  }, [mainCarouselRef, navigationMainCarouselRef]);


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />
  };

  const settingsThumbs = {
    className: "slider variable-width",
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    adaptiveHeight: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };



  return (

    <div className="ProductCarousel">
      <Slider
        {...settingsMain}
        asNavFor={navigationMainCarouselRef.current}
        ref={mainCarouselRef}
      >
        {slidesData && slidesData.map((slide) =>

          <div className="w-full max-w-lg mb-5 h-96 lg:h-carousel-lg" key={slide.id}>
            <div className="h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.image})` }} >
            </div>
          </div>
        )}
      </Slider>
      <Slider
        {...settingsThumbs}
        asNavFor={mainCarousel}
        ref={navigationMainCarouselRef}>
        {slidesData && slidesData.map((slide) => <ProductCarouselNavCard key={slide.id} image={slide.image} />)}
      </Slider>
    </div>
  );
}

export default ProductCarousel;